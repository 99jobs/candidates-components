import { ComponentProps } from '@stitches/react'
import { ReactElement } from 'react'
import { StyledButton } from './style'

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  /**
   * Label do botão
   */
  label?: string
  /**
   * Label do botão
   */
  color?: 'default' | 'outline' | 'ghost'
  /**
   * Ícone do botão do lado esquerdo
   */
  prefixIcon?: ReactElement
  /**
   * Ícone do botão do lado direito
   */
  sufixIcon?: ReactElement
}

export const Button = ({ label, color, prefixIcon, sufixIcon, ...props }: ButtonProps) => (
  <StyledButton color={color} aria-label={props['aria-label']} {...props}>
    <>
      {prefixIcon}
      {label}
      {sufixIcon}
    </>
  </StyledButton>
)
