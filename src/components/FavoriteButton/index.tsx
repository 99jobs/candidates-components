import { type ComponentProps } from '@stitches/react'
import { Heart } from 'iconsax-react'
import { StyledFavoriteButton } from './style'

export interface StyledFavoriteButtonProps extends ComponentProps<typeof StyledFavoriteButton> {
  /**
   * true = é um ícone escuro (opaco) que fica vermelho no hover/ativo
   * false = é um ícone outline que fica vermelho no hover/ativo
   */
  isFilled?: boolean
}

export const FavoriteButton = ({ isFilled = false, ...props }: StyledFavoriteButtonProps) => (
  <StyledFavoriteButton isFilled={isFilled} {...props}>
    <Heart size={25} />
  </StyledFavoriteButton>
)
