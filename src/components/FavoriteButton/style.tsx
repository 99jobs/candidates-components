import { styled } from '../../configs/stitches.config'

export const StyledFavoriteButton = styled('button', {
  background: 'none',
  cursor: 'pointer',

  '&:hover, &[data-favorited="true"]': {
    svg: {
      color: '$redSystemDark',
      fill: '$redSystemDark',
    },
  },

  variants: {
    isFilled: {
      true: {
        svg: {
          color: 'rgba(35, 34, 34, 0.3)',
          fill: 'rgba(35, 34, 34, 0.3)',
        },
      },
    },
  },

  svg: {
    transition: 'color 0.2s linear, fill 0.2s linear',
  },
})
