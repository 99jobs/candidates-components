import { styled } from '../../configs/stitches.config'
import { StyledCompanyCardHighlightedTag } from '../CompanyCardHighlightedTag/style'
import { StyledFavoriteButton } from '../FavoriteButton/style'

export const StyledCompanyCard = styled('div', {
  height: 120,
  position: 'relative',
  borderRadius: '$md',
  flexShrink: 0,

  defaultVariants: {
    size: 'sm',
  },

  variants: {
    size: {
      sm: {
        width: 148,
      },
      md: {
        width: 169,
        boxShadow:
          '0px 4px 4px rgba(0, 0, 0, 0.15), 0px 7.56944px 15.1389px rgba(0, 0, 0, 0.04), 0px 1.51389px 4.54167px rgba(0, 0, 0, 0.04)',
      },
    },
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '$md',
  },

  [`${StyledFavoriteButton}`]: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  [`${StyledCompanyCardHighlightedTag}`]: {
    position: 'absolute',
    top: 10,
    left: -10,
  },
})
