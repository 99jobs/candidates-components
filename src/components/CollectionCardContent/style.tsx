import { styled } from '../../configs/stitches.config'
import { StyledFavoriteButton } from '../FavoriteButton/style'

export const StyledCollectionCardContent = styled('div', {
  position: 'relative',

  [`${StyledFavoriteButton}`]: {
    position: 'absolute',
    top: 0,
    right: 20,
  },

  h1: {
    fontSize: '$h2',
    color: '$grayDark',
    fontWeight: 700,
    marginBottom: 8,
    paddingRight: 55,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
  },

  p: {
    color: '$gray',
    fontSize: '$body',
  },
})
