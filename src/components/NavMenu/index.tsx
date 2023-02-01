import { type ComponentProps } from '@stitches/react'
import { StyledNavMenu } from './style'

export interface NavMenuProps extends ComponentProps<typeof StyledNavMenu> {}

export const NavMenu = ({ ...props }: NavMenuProps) => <StyledNavMenu {...props}></StyledNavMenu>
