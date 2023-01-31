import { type ComponentProps } from '@stitches/react'
import { StyledBottomBar } from './style'

export interface BottomBarProps extends ComponentProps<typeof StyledBottomBar> {}

export const BottomBar = ({ ...props }: BottomBarProps) => (
  <StyledBottomBar {...props}></StyledBottomBar>
)
