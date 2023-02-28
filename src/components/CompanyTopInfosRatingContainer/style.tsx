import { styled } from '../../configs/stitches.config'
import { StyledRating } from '../Rating/style'

export const StyledCompanyTopInfosRatingContainer = styled('div', {
  paddingX: 12,

  [`${StyledRating}`]: {
    color: '$gray',
    fontSize: '$h2',
  },
})
