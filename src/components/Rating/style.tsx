import { styled } from '../../configs/stitches.config'

export const StyledRating = styled('span', {
  fontSize: '$small',
  fontWeight: 600,
  color: '$onGrayDark',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,

  svg: {
    fill: '$yellowSystemDark',
    path: {
      stroke: '$yellowSystemDark',
    },
  },
})
