import {
  forwardRef,
  useId,
  useState,
  type ChangeEvent,
  type ComponentProps,
  type ReactNode,
} from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { Button } from '../Button'
import {
  StyledInputField,
  StyledInputHelperText,
  StyledInputLabel,
  StyledInputWrapper,
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
      <StyledInputWrapper
        data-is-active={isActive}
        data-has-icon={sufixIconButton !== undefined || showAndHidePasswordButton}
        data-has-error={errorText !== undefined}
      >
        <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>

        <StyledInputField id={id} type={inputType} onChange={handleInput} ref={ref} {...props} />

        {showAndHidePasswordButton ? (
          <Button
            aria-label="Exibir senha"
            prefixIcon={inputType === 'password' ? <MdVisibility /> : <MdVisibilityOff />}
            onClick={handleInputType}
          />
        ) : (
          sufixIconButton
        )}

        {(errorText || helperText) && (
          <StyledInputHelperText role="alert">{errorText || helperText}</StyledInputHelperText>
        )}
      </StyledInputWrapper>
    )
  }
)

Input.displayName = 'Input'
