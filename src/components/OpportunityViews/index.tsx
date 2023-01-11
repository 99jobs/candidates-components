import { type ComponentProps } from '@stitches/react'
import { StyledOpportunityViews } from './style'

export interface OpportunityViewsProps extends ComponentProps<typeof StyledOpportunityViews> {}

export const OpportunityViews = ({ ...props }: OpportunityViewsProps) => (
  <StyledOpportunityViews {...props}>
    Mais de 5.456 visualizações desde semana passada
  </StyledOpportunityViews>
)
