import { useId, useState, type ChangeEvent, type ComponentProps, type ReactNode } from 'react'
import {
  StyledInputField,
  StyledInputHelperText,
  StyledInputLabel,
  StyledInputWrapper,
} from './style'

export interface InputProps extends ComponentProps<typeof StyledInputField> {
  /**
   * The label of input
   */
  label: string
  /**
   * The text bellow input
   */
  helperText?: string
  /**
   * The input hint text
   */
  placeholder?: string
  /**
   * The input right icon button
   */
  sufixIconButton?: ReactNode
}

export const Input = ({
  label,
  helperText,
  type,
  onChange,
  placeholder,
  sufixIconButton,
  ...props
}: InputProps) => {
  const id = useId()
  const [isActive, setIsActive] = useState(false)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.currentTarget.value !== '')
    if (onChange) onChange(e)
  }

  return (
    <StyledInputWrapper data-is-active={isActive} data-has-icon={sufixIconButton != null}>
      <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>

      <StyledInputField
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleInput}
        {...props}
      />

      {sufixIconButton}

      {helperText && <StyledInputHelperText>{helperText}</StyledInputHelperText>}
    </StyledInputWrapper>
  )
}
