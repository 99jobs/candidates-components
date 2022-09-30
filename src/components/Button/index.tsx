import { forwardRef, ReactNode } from 'react'
import ButtonWrapper from './style'

export interface ButtonProps {
  /**
   * Label do botão
   */
  label?: string
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
  prefixIcon?: ReactNode
  /**
   * Ícone do botão do lado direito
   */
  sufixIcon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <ButtonWrapper
    type={props.type}
    color={props.color}
    disabled={props.disabled}
    {...props}
    ref={ref}
  >
    <>
      {props.prefixIcon}
      {props.label}
      {props.sufixIcon}
    </>
  </ButtonWrapper>
))

Button.displayName = 'Button'
