import { ComponentProps } from '@stitches/react'
import { StyledOpportunityTopInfos } from './style'

export interface OpportunityTopInfosProps
  extends ComponentProps<typeof StyledOpportunityTopInfos> {}

export const OpportunityTopInfos = ({ ...props }: OpportunityTopInfosProps) => (
  <StyledOpportunityTopInfos {...props} />
)
