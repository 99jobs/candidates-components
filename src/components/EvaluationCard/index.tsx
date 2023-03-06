import { type ComponentProps } from '@stitches/react'
import { StyledEvaluationCard } from './style'

export interface EvaluationCardProps extends ComponentProps<typeof StyledEvaluationCard> {}

export const EvaluationCard = ({ ...props }: EvaluationCardProps) => (
  <StyledEvaluationCard {...props}></StyledEvaluationCard>
)
