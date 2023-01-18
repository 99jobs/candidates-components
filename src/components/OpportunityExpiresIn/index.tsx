import { type ComponentProps } from '@stitches/react'
import { Clock } from 'iconsax-react'
import { StyledOpportunityExpiresIn } from './style'

export interface OpportunityExpiresInProps
  extends ComponentProps<typeof StyledOpportunityExpiresIn> {}

export const OpportunityExpiresIn = ({ children, ...props }: OpportunityExpiresInProps) => (
  <StyledOpportunityExpiresIn {...props}>
    {children} <Clock />
  </StyledOpportunityExpiresIn>
)
