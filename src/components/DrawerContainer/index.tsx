import { type ComponentProps } from '@stitches/react'
import { StyledDrawerContainer } from './style'

export interface DrawerContainerProps extends ComponentProps<typeof StyledDrawerContainer> {}

export const DrawerContainer = ({ ...props }: DrawerContainerProps) => (
  <StyledDrawerContainer {...props}></StyledDrawerContainer>
)
