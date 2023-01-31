import { type ComponentProps } from '@stitches/react'
import { StyledBottomBarList } from './style'

export interface BottomBarListProps extends ComponentProps<typeof StyledBottomBarList> {}

export const BottomBarList = ({ ...props }: BottomBarListProps) => (
  <StyledBottomBarList {...props}></StyledBottomBarList>
)
