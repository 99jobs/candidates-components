import { type ComponentProps } from '@stitches/react'
import { StyledBottomBarListItem } from './style'

export interface BottomBarListItemProps extends ComponentProps<typeof StyledBottomBarListItem> {}

export const BottomBarListItem = ({ ...props }: BottomBarListItemProps) => (
  <StyledBottomBarListItem {...props}></StyledBottomBarListItem>
)
