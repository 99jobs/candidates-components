import { type ComponentProps } from '@stitches/react'
import { forwardRef, type ReactNode } from 'react'
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
  /**
   * Se é um IconButton
   */
  isIconButton?: boolean
}

export const Button = ({
  label,
  color,
  prefixIcon,
  sufixIcon,
  isIconButton,
  ...props
}: ButtonProps) => (
  <StyledButton {...props} color={color} isIconButton={isIconButton}>
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

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ label, color, prefixIcon, sufixIcon, isIconButton, ...props }, ref) => (
    <StyledButtonLink color={color} isIconButton={isIconButton} ref={ref} {...props}>
      <>
        {prefixIcon}
        {label}
        {sufixIcon}
      </>
    </StyledButtonLink>
  )
)

ButtonLink.displayName = 'ButtonLink'
