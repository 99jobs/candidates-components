import { type ComponentProps } from '@stitches/react'
import { Star1 } from 'iconsax-react'
import { StyledRating } from './style'

export interface StyledRatingProps extends ComponentProps<typeof StyledRating> {
  /**
   * Qual a pontuação
   */
  rate: number
}

export const Rating = ({ rate, ...props }: StyledRatingProps) => (
  <StyledRating {...props}>
    <Star1 size={15} /> {rate}
  </StyledRating>
)
