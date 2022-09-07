import { FaUser } from 'react-icons/fa'
import ButtonWrapper from './style'

interface ButtonProps {
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
}

const Button = ({ label, color = 'default', disabled = false }: ButtonProps) => (
  <ButtonWrapper color={color} disabled={disabled}>
    <FaUser />
    {label}
  </ButtonWrapper>
)

export default Button
