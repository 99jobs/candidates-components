import { styled } from '../../configs/stitches.config'
import { StyledFavoriteButton } from '../FavoriteButton/style'
import { StyledOpportunityOpenUntil } from '../OpportunityOpenUntil/style'

export const StyledOpportunityCardContent = styled('div', {
  position: 'relative',

  [`${StyledFavoriteButton}`]: {
    position: 'absolute',
    top: 6,
    right: 0,
  },

  [`${StyledOpportunityOpenUntil}`]: {
    marginBottom: 4,
  },

  h1: {
    fontSize: '$h1',
    color: '$grayDark',
    fontWeight: 700,
    marginBottom: 8,
    paddingRight: 35,
  },
})
