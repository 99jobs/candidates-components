import { styled } from '../../configs/stitches.config'

export const StyledCollectionCard = styled('div', {
  width: '100%',
  maxWidth: 320,
  flexShrink: 0,

  '@md': {
    maxWidth: 560,
  },

  '@lg': {
    maxWidth: 593,
  },
})
