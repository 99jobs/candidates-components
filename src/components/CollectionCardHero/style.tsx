import { styled } from '../../configs/stitches.config'
import { StyledCompanyLogo } from '../CompanyLogo/style'

export const StyledCollectionCardHero = styled('div', {
  position: 'relative',
  height: 178,
  borderRadius: '$md',
  border: '1px solid rgba(233, 233, 233, 0.8)',
  marginBottom: 8,

  '@md': {
    height: 296,
  },

  '@lg': {
    height: 336,
  },

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

  [`img:not(${StyledCompanyLogo})`]: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
  },

  [`${StyledCompanyLogo}`]: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 1,
  },
})
