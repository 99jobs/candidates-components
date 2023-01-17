import * as PrimitiveTabs from '@radix-ui/react-tabs'
import { styled } from '../../configs/stitches.config'

export const StyledTabBarItems = styled(PrimitiveTabs.List, {
  display: 'flex',
  overflowX: 'auto',
  position: 'relative',

  '.active-border': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: 4,
    backgroundColor: '$bluePrimary',
    transition: 'left 0.3s ease-in-out, width 0.4s ease-in-out',
    borderRadius: 32,
  },

  '.active-circle': {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 36,
    height: 36,
    borderRadius: '50%',
    backgroundColor: '$backgroundGrayLight',
    transition: 'left 0.3s ease-in-out',
  },
})
