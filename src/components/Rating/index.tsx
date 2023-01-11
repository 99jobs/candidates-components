import { type ComponentProps } from '@stitches/react'
import { Star1 } from 'iconsax-react'
import { StyledRating } from './style'

export interface StyledRatingProps extends ComponentProps<typeof StyledRating> {}

export const Rating = ({ ...props }: StyledRatingProps) => (
  <StyledRating {...props}>
    <Star1 size={15} /> 4.8
  </StyledRating>
)
