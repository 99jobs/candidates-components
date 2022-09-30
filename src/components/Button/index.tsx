import { ElementRef, forwardRef, ReactElement } from 'react'
import { ButtonWrapper } from './style'

export interface ButtonProps {
  /**
   * Label do botão
   */
  label: string
  /**
   * Tipo do botão
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Label do botão
   */
  color?: 'default' | 'outline' | 'ghost'
  /**
   * Botão habilitado/desabilidado
   */
  disabled?: boolean
  /**
   * Ícone do botão do lado esquerdo
   */
  prefixIcon?: ReactElement
  /**
   * Ícone do botão do lado direito
   */
  sufixIcon?: ReactElement
  /**
   * Se exibe ou não a label do botão. Quando setado para não exibir, o texto da label aparece somente no aria-label e não como texto do botão
   */
  hideLabel?: boolean
}

export const Button = forwardRef<ElementRef<typeof ButtonWrapper>, ButtonProps>(
  ({ label, type, color, disabled, prefixIcon, sufixIcon, hideLabel, ...props }, ref) => (
    <ButtonWrapper
      type={type}
      color={color}
      disabled={disabled}
      aria-label={label}
      ref={ref}
      {...props}
    >
      <>
        {prefixIcon}
        {!hideLabel && label}
        {sufixIcon}
      </>
    </ButtonWrapper>
  )
)

Button.displayName = 'Button'
