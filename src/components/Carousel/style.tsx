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
  '.carousel .carousel-status': {
    borderRadius: '$md',
    backgroundColor: 'rgba(77, 80, 86, 0.8)',
    color: '#fff',
    fontSize: '$body',
    fontWeight: 600,
    paddingX: 16,
    top: 'auto',
    bottom: 21,
    right: 14,
  },
})
