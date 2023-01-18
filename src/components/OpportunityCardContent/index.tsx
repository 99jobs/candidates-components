import { type ComponentProps } from '@stitches/react'
import { StyledOpportunityCardContent } from './style'

export interface OpportunityCardContentProps
  extends ComponentProps<typeof StyledOpportunityCardContent> {}

export const OpportunityCardContent = ({ ...props }: OpportunityCardContentProps) => (
  <StyledOpportunityCardContent {...props} />
)
