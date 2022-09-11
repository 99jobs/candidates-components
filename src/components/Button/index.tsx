import { ReactNode } from 'react'
import ButtonWrapper from './style'

export interface ButtonProps {
  /**
   * Label do botão
   */
  label: string
  /**
   * Label do botão
   */
  color: 'default' | 'outlined' | 'ghost'
  /**
   * Botão habilitado/desabilidado
   */
  disabled: boolean
  /**
   * Ícone do botão do lado esquerdo
   */
  prefixIcon?: ReactNode
}

const Button = ({ color = 'default', disabled = false, prefixIcon }: ButtonProps) => (
  <ButtonWrapper color={color} disabled={disabled}>
    <>{prefixIcon}</>
  </ButtonWrapper>
)

export default Button
