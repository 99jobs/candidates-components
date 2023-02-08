import { styled } from '../../configs/stitches.config'

export const StyledSubscriptionCardContent = styled('div', {
  flexGrow: 1,
  position: 'relative',

  h1: {
    fontSize: '$h2',
    color: '$grayDark',
    fontWeight: 700,
    marginBottom: 8,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
  },
})
