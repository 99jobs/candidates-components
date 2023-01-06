import { type ComponentProps } from '@stitches/react'
import { StyledTabBarItems } from './style'

export interface TabBarItemsProps extends ComponentProps<typeof StyledTabBarItems> {}

export const TabBarItems = ({ ...props }: TabBarItemsProps) => (
  <StyledTabBarItems {...props}></StyledTabBarItems>
)
