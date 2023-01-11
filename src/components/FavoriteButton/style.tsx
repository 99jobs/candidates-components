import { styled } from '../../configs/stitches.config'

export const StyledFavoriteButton = styled('button', {
  background: 'none',
  cursor: 'pointer',

  svg: {
    transition: 'color 0.2s linear, fill 0.2s linear',
  },

  '&:hover, &[data-favorited="true"]': {
    svg: {
      color: '$redSystemDark',
      fill: '$redSystemDark',
    },
  },
})
