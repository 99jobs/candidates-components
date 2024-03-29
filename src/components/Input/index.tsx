import { type ComponentProps } from '@stitches/react'
import { Eye, EyeSlash } from 'iconsax-react'
import { forwardRef, useId, useState, type ChangeEvent, type ReactNode } from 'react'
import { Button } from '../Button'
import {
  StyledInputContainer,
  StyledInputField,
  StyledInputHelperText,
  StyledInputLabel,
} from './style'

export interface InputProps extends ComponentProps<typeof StyledInputField> {
  /**
   * A label do input
   */
  label: string
  /**
   * O ícone de botão que fica do lado direito do input
   */
  sufixIconButton?: ReactNode
  /**
   * O texto indicando o erro que fica abaixo do input. Esse texto substituí o `helperText`
   */
  errorText?: string
  /**
   * O texto que fica abaixo do input
   */
  helperText?: string
  /**
   * Quando o valor é `true`, **automaticamente** adiciona um `sufixIconButton` com o efeito de exibir/esconder a senha digitada e o type do input é alterado para password
   */
  showAndHidePasswordButton?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      sufixIconButton,
      errorText,
      helperText,
      showAndHidePasswordButton = false,
      type,
      onChange,
      ...props
    },
    ref
  ) => {
    const id = useId()
    const [isActive, setIsActive] = useState(false)
    const [inputType, setInputType] = useState(type)

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      setIsActive(e.target.value !== '')
      onChange?.(e)
    }

    const handleInputType = () => {
      setInputType(inputType === 'password' ? 'text' : 'password')
    }

    return (
      <StyledInputContainer
        data-is-active={isActive}
        data-has-icon={sufixIconButton !== undefined || showAndHidePasswordButton}
        data-has-helper-text={errorText !== undefined || helperText !== undefined}
        data-has-error={errorText !== undefined}
      >
        <StyledInputLabel
          htmlFor={id}
          {...(props['aria-labelledby'] ? { id: props['aria-labelledby'] } : {})}
        >
          {label}
        </StyledInputLabel>

        <StyledInputField ref={ref} {...props} id={id} type={inputType} onChange={handleInput} />

        {showAndHidePasswordButton ? (
          <Button
            aria-label="Exibir senha"
            prefixIcon={inputType === 'password' ? <Eye /> : <EyeSlash />}
            onClick={handleInputType}
          />
        ) : (
          sufixIconButton
        )}

        {(errorText || helperText) && (
          <StyledInputHelperText role="alert">{errorText || helperText}</StyledInputHelperText>
        )}
      </StyledInputContainer>
    )
  }
)

Input.displayName = 'Input'
