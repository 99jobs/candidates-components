import { type ComponentProps } from '@stitches/react'
import { StyledOpportunityCard } from './style'

export interface OpportunityCardProps extends ComponentProps<typeof StyledOpportunityCard> {}

export const OpportunityCard = ({ ...props }: OpportunityCardProps) => (
  <StyledOpportunityCard {...props} />
)
