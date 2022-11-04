import { ComponentProps } from 'react'
import { StyledTagContainer } from './style'

export interface TagProps extends ComponentProps<typeof StyledTagContainer> {}

export const Tag = ({ children, ...props }: TagProps) => (
  <StyledTagContainer {...props}>{children}</StyledTagContainer>
)
