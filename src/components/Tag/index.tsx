import { type ComponentProps } from '@stitches/react'
import { StyledTagContainer } from './style'

export interface TagProps extends ComponentProps<typeof StyledTagContainer> {}

export const Tag = ({ children, ...props }: TagProps) => (
  <StyledTagContainer {...props}>{children}</StyledTagContainer>
)
