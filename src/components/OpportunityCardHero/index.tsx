import { type ComponentProps } from '@stitches/react'
import { StyledOpportunityCardHero } from './style'

export interface OpportunityCardHeroProps
  extends ComponentProps<typeof StyledOpportunityCardHero> {}

export const OpportunityCardHero = ({ ...props }: OpportunityCardHeroProps) => (
  <StyledOpportunityCardHero {...props} />
)
