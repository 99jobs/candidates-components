import { type ComponentProps } from '@stitches/react'
import { StyledOpportunityOpenUntil } from './style'

export interface OpportunityOpenUntilProps
  extends ComponentProps<typeof StyledOpportunityOpenUntil> {}

export const OpportunityOpenUntil = ({ ...props }: OpportunityOpenUntilProps) => (
  <StyledOpportunityOpenUntil {...props} />
)
