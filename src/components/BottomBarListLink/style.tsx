import * as PrimitiveNavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '../../configs/stitches.config'

export const StyledBottomBarListLink = styled(PrimitiveNavigationMenu.Link, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  fontSize: '$small',
  color: '$gray',
  fontWeight: 400,
  textDecoration: 'none',
  textAlign: 'center',
  cursor: 'pointer',

  svg: {
    transition: 'color 0.2s ease-in-out',
  },

  '&[data-active]': {
    fontWeight: 700,
    color: '$grayDark',

    svg: {
      color: '$bluePrimary',
    },
  },

  '&[data-has-notification="true"]': {
    '&:before': {
      content: '',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '$redSystemDark',
      position: 'absolute',
      top: 2,
      right: '50%',
      transform: 'translateX(8px)',
    },
  },
})
