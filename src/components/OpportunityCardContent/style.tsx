import { styled } from '../../configs/stitches.config'
import { StyledFavoriteButton } from '../FavoriteButton/style'
import { StyledOpportunityOpenUntil } from '../OpportunityOpenUntil/style'

export const StyledOpportunityCardContent = styled('div', {
  position: 'relative',
  textDecoration: 'none',

  [`${StyledFavoriteButton}`]: {
    position: 'absolute',
    top: 0,
    right: 20,
  },

  [`${StyledOpportunityOpenUntil}`]: {
    marginBottom: 4,
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
})
