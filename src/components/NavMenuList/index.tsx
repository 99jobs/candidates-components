import { type ComponentProps } from '@stitches/react'
import { StyledNavMenuList } from './style'

export interface NavMenuListProps extends ComponentProps<typeof StyledNavMenuList> {}

export const NavMenuList = ({ ...props }: NavMenuListProps) => (
  <StyledNavMenuList {...props}></StyledNavMenuList>
)
