import { type ComponentProps, type ReactNode } from 'react'
import { StyledButton } from './style'

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  /**
   * Button label
   */
  label?: string
  /**
   * Button color
   */
  color?: 'default' | 'outline' | 'ghost'
  /**
   * Button left icon
   */
  prefixIcon?: ReactNode
  /**
   * Button right icon
   */
  sufixIcon?: ReactNode
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
