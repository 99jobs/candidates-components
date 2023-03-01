import { type ComponentProps } from '@stitches/react'
import { StyledPageSectionTitle } from './style'

export interface PageSectionTitleProps extends ComponentProps<typeof StyledPageSectionTitle> {}

export const PageSectionTitle = ({ ...props }: PageSectionTitleProps) => (
  <StyledPageSectionTitle {...props} />
)
