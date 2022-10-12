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
   * O placeholder do input
   */
  placeholder?: string
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
   * Quando `true` é **automaticamente** adicionado um `sufixIconButton` com o efeito de exibir/esconder a senha digitada e o type do input é alterado para password
   */
  showAndHidePasswordButton?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      sufixIconButton,
      errorText,
      helperText,
      showAndHidePasswordButton = false,
      ...props
    },
    ref
  ) => {
    const id = useId()
    const [isActive, setIsActive] = useState(false)
    const [inputType, setInputType] = useState(props.type)

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      setIsActive(e.target.value !== '')
    }

    const handleInputType = () => {
      setInputType(inputType === 'password' ? 'text' : 'password')
    }

    return (
      <StyledInputWrapper
        data-is-active={isActive}
        data-has-icon={sufixIconButton !== undefined || showAndHidePasswordButton}
        data-has-error={errorText !== undefined}
        onChange={handleInput}
      >
        <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>

        <StyledInputField id={id} placeholder={placeholder} ref={ref} {...props} type={inputType} />

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
