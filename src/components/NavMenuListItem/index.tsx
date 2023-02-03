import { type ComponentProps } from '@stitches/react'
import { StyledNavMenuListItem } from './style'

export interface NavMenuListItemProps extends ComponentProps<typeof StyledNavMenuListItem> {}

export const NavMenuListItem = ({ ...props }: NavMenuListItemProps) => (
  <StyledNavMenuListItem {...props}></StyledNavMenuListItem>
)
