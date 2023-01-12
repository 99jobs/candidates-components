import { type ComponentProps } from '@stitches/react'
import { StyledOpportunityTags } from './style'

export interface OpportunityTagsProps extends ComponentProps<typeof StyledOpportunityTags> {}

export const OpportunityTags = ({ ...props }: OpportunityTagsProps) => (
  <StyledOpportunityTags {...props} />
)
