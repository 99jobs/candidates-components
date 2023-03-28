import { type ComponentProps } from '@stitches/react'
import { Heart } from 'iconsax-react'
import { StyledFavoriteButton } from './style'

export interface StyledFavoriteButtonProps extends ComponentProps<typeof StyledFavoriteButton> {
  /**
   * true = é um ícone escuro (opaco) que fica vermelho no hover/ativo
   * false = é um ícone outline que fica vermelho no hover/ativo
   */
  isFilled?: boolean

  /**
   * Botão ativo (vermelho preenchido)
   */
  favorited?: boolean
}

export const FavoriteButton = ({
  isFilled = false,
  favorited = false,
  ...props
}: StyledFavoriteButtonProps) => (
  <StyledFavoriteButton isFilled={isFilled} data-favorited={favorited} {...props}>
    <Heart size={25} />
  </StyledFavoriteButton>
)
