import { type ComponentProps } from '@stitches/react'
import { StyledTabBarContent } from './style'

export interface TabBarContentProps extends ComponentProps<typeof StyledTabBarContent> {}

export const TabBarContent = ({ ...props }: TabBarContentProps) => (
  <StyledTabBarContent {...props}></StyledTabBarContent>
)
