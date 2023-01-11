import { type ComponentProps } from '@stitches/react'
import { Heart } from 'iconsax-react'
import { StyledFavoriteButton } from './style'

export interface StyledFavoriteButtonProps extends ComponentProps<typeof StyledFavoriteButton> {}

export const FavoriteButton = ({ ...props }: StyledFavoriteButtonProps) => (
  <StyledFavoriteButton {...props}>
    <Heart size={25} />
  </StyledFavoriteButton>
)
