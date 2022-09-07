import { MdAccountCircle } from 'react-icons/md'
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
    <MdAccountCircle />
    {label}
  </ButtonWrapper>
)

export default Button
