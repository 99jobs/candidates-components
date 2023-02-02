import { styled } from '../../configs/stitches.config'
import { StyledNavMenuList } from '../NavMenuList/style'

export const StyledDrawer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  width: '100vw',
  inset: 0,
  transition: 'left 0.3s ease-in-out',
  backgroundColor: '#ffffff',
  overflowX: 'hidden',
  overflowY: 'auto',
  paddingX: 20,
  zIndex: 2,

  defaultVariants: {
    visibility: 'hidden',
  },

  variants: {
    visibility: {
      visible: {
        left: 0,
      },
      hidden: {
        left: '-100%',
      },
    },
  },

  [`${StyledNavMenuList}`]: {
    marginBottom: 24,
  },
})
