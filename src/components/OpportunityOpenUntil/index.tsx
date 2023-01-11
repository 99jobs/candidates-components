import { type ComponentProps } from '@stitches/react'
import { StyledOpportunityOpenUntil } from './style'

export interface OpportunityOpenUntilProps
  extends ComponentProps<typeof StyledOpportunityOpenUntil> {}

export const OpportunityOpenUntil = ({ ...props }: OpportunityOpenUntilProps) => (
  <StyledOpportunityOpenUntil {...props}>
    Inscrições abertas até <time dateTime="2022-11-28">28/11/2022</time>
  </StyledOpportunityOpenUntil>
)
