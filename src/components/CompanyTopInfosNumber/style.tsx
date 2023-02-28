import { styled } from '../../configs/stitches.config'

export const StyledCompanyTopInfosNumber = styled('div', {
  textAlign: 'center',
  paddingX: 12,

  'h1, h2, h3, h4, h5, h6, p': {
    '&:first-of-type': {
      fontSize: '$h1',
      color: '$bluePrimary',
    },
    '&:last-of-type': {
      fontSize: '$body',
      color: '$bluePrimary',
    },
  },
})
