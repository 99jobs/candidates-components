import { type ComponentProps, type ReactNode } from 'react'
import { StyledButton } from './style'

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  /**
   * O texto do botão
   */
  label?: string
  /**
   * A cor do botão
   */
  color?: 'default' | 'outline' | 'ghost'
  /**
   * O ícone que fica ao lado esquerdo do texto
   */
  prefixIcon?: ReactNode
  /**
   * O ícone que fica ao lado direito do texto
   */
  sufixIcon?: ReactNode
  /**
   * A label do botão. Não é visível na UI, apenas para screen readers.
   */
  'aria-label'?: string
}

export const Button = ({ label, color, prefixIcon, sufixIcon, ...props }: ButtonProps) => (
  <StyledButton color={color} {...props}>
    <>
      {prefixIcon}
      {label}
      {sufixIcon}
    </>
  </StyledButton>
)
