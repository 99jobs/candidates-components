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

const Button = ({ label, color = 'default', disabled = false, prefixIcon }: ButtonProps) => (
  <ButtonWrapper color={color} disabled={disabled}>
    <>
      {prefixIcon}-{label}
    </>
  </ButtonWrapper>
)

export default Button
