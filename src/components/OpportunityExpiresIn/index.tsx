import { type ComponentProps } from '@stitches/react'
import { Clock } from 'iconsax-react'
import { StyledOpportunityExpiresIn } from './style'

export interface OpportunityExpiresInProps
  extends ComponentProps<typeof StyledOpportunityExpiresIn> {}

export const OpportunityExpiresIn = ({ ...props }: OpportunityExpiresInProps) => (
  <StyledOpportunityExpiresIn {...props}>
    restam <Clock /> 48h
  </StyledOpportunityExpiresIn>
)
