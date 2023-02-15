import { styled } from '../../configs/stitches.config'

export const StyledNotificationCardContent = styled('div', {
  flexGrow: 1,
  position: 'relative',

  div: {
    fontSize: '$body',
    color: '$grayDark',
    fontWeight: 400,
    lineHeight: '20px',
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
  },
})
