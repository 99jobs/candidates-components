import ButtonWrapper from './style'

interface ButtonProps {
  /**
   * Button contents
   */
  label: string
  color: 'red' | 'violet'
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ label, color }: ButtonProps) => (
  <ButtonWrapper color={color}>{label}</ButtonWrapper>
)

export default Button
