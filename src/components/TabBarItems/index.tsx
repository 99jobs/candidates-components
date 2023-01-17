import { type ComponentProps } from '@stitches/react'
import { StyledTabBarItems } from './style'

export interface TabBarItemsProps extends ComponentProps<typeof StyledTabBarItems> {}

export const TabBarItems = ({ children, ...props }: TabBarItemsProps) => (
  <StyledTabBarItems {...props}>
    <span className="active-border"></span>
    <span className="active-circle"></span>
    {children}
  </StyledTabBarItems>
)
