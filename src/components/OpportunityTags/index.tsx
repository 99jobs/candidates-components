import { type ComponentProps } from '@stitches/react'
import { Chip } from '../Chip'
import { StyledOpportunityTags } from './style'

export interface OpportunityTagsProps extends ComponentProps<typeof StyledOpportunityTags> {}

export const OpportunityTags = ({ ...props }: OpportunityTagsProps) => (
  <StyledOpportunityTags {...props}>
    <Chip label="Remoto" color="outlined" />
    <Chip label="Afirmativa para Mulheres" color="outlined" />
    <Chip label="Estágio" color="level" />
  </StyledOpportunityTags>
)
