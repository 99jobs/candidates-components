import { useId, useState, type ChangeEvent, type ComponentProps } from 'react'
import {
  StyledInputField,
  StyledInputHelperText,
  StyledInputLabel,
  StyledInputWrapper,
} from './style'

export type InputProps = ComponentProps<typeof StyledInputField> & {
  label: string
  helperText?: string
}

export const Input = ({ label, helperText, type, onChange, placeholder, ...props }: InputProps) => {
  const id = useId()
  const [isActive, setIsActive] = useState(false)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.currentTarget.value !== '')
    if (onChange) onChange(e)
  }

  return (
    <StyledInputWrapper data-is-active={isActive}>
      <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>

      <StyledInputField
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleInput}
        {...props}
      />

      {helperText && <StyledInputHelperText>{helperText}</StyledInputHelperText>}
    </StyledInputWrapper>
  )
}
