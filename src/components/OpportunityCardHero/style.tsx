import { styled } from '@stitches/react'
import { StyledCarouselWrapper } from '../Carousel/style'
import { StyledCompanyLogo } from '../CompanyLogo/style'
import { StyledMatch } from '../Match/style'
import { StyledOpportunityExpiresIn } from '../OpportunityExpiresIn/style'
import { StyledRating } from '../Rating/style'

export const StyledOpportunityCardHero = styled('div', {
  position: 'relative',
  height: 178,
  borderRadius: '$md',
  border: '1px solid rgba(233, 233, 233, 0.8)',
  marginBottom: 8,

  '&:before': {
    content: '',
    position: 'absolute',
    inset: 0,
    left: '50%',
    zIndex: 1,
    background: 'linear-gradient(90deg, rgba(217, 217, 217, 0) 0%, rgba(14, 14, 14, 0.8) 100%)',
    mixBlendMode: 'multiply',
    borderRadius: 'inherit',
    pointerEvents: 'none',
  },
  [`${StyledCarouselWrapper}`]: {
    borderRadius: 'inherit',
    overflow: 'hidden',

    img: {
      height: 178,
      objectFit: 'cover',
    },
  },
  [`${StyledCompanyLogo}`]: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 1,
  },
  [`${StyledOpportunityExpiresIn}`]: {
    position: 'absolute',
    top: 0,
    right: 12,
    zIndex: 1,
  },
  [`${StyledMatch}`]: {
    position: 'absolute',
    top: 82,
    right: 17,
    zIndex: 1,
  },
  [`${StyledRating}`]: {
    position: 'absolute',
    bottom: 12,
    right: 20,
    zIndex: 1,
  },
})
