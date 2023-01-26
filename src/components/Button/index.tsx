import { type ComponentProps } from '@stitches/react'
import { type ReactNode } from 'react'
import { StyledButton, StyledButtonLink } from './style'

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
}

export const Button = ({ label, color, prefixIcon, sufixIcon, ...props }: ButtonProps) => (
  <StyledButton {...props} color={color}>
    <>
      {prefixIcon}
      {label}
      {sufixIcon}
    </>
  </StyledButton>
)

export interface ButtonLinkProps
  extends ComponentProps<typeof StyledButtonLink>,
    Pick<ComponentProps<typeof Button>, 'label' | 'prefixIcon' | 'sufixIcon' | 'disabled'> {}

export const ButtonLink = ({ label, color, prefixIcon, sufixIcon, ...props }: ButtonLinkProps) => (
  <StyledButtonLink {...props} color={color}>
    <>
      {prefixIcon}
      {label}
      {sufixIcon}
    </>
  </StyledButtonLink>
)
