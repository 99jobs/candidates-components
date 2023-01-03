import { type ComponentProps } from '@stitches/react'
import { StyledHeader } from './style'

export interface HeaderProps extends ComponentProps<typeof StyledHeader> {}

export const Header = ({ children, ...props }: HeaderProps) => (
  <StyledHeader {...props}>{children}</StyledHeader>
)
