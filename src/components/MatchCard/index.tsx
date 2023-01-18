import { ComponentProps } from '@stitches/react'
import { StyledMatchCard } from './style'

export interface MatchCardProps extends ComponentProps<typeof StyledMatchCard> {}

export const MatchCard = ({ ...props }: MatchCardProps) => <StyledMatchCard {...props} />
