import { styled } from '../../configs/stitches.config'

export const StyledCarouselWrapper = styled('div', {
  '.carousel .control-dots': {
    margin: '0 0 19px 0',
  },
  '.carousel .control-dots .dot': {
    backgroundColor: '$gray',
    boxShadow: 'none',
    opacity: 1,
    margin: '0 4px',
  },
  '.carousel .control-dots .dot.selected': {
    backgroundColor: '#fff',
  },
})
