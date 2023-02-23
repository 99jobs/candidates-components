import { type ComponentProps } from '@stitches/react'
import { StyledCompanyCardHighlightedTag } from './style'

export interface CompanyCardHighlightedTagProps
  extends ComponentProps<typeof StyledCompanyCardHighlightedTag> {}

export const CompanyCardHighlightedTag = ({ ...props }: CompanyCardHighlightedTagProps) => (
  <StyledCompanyCardHighlightedTag {...props}>Destaque</StyledCompanyCardHighlightedTag>
)
