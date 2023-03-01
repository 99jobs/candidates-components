import { type ComponentProps } from '@stitches/react'
import { StyledPageSectionContent } from './style'

export interface PageSectionContentProps extends ComponentProps<typeof StyledPageSectionContent> {}

export const PageSectionContent = ({ ...props }: PageSectionContentProps) => (
  <StyledPageSectionContent {...props} />
)
