import * as PrimitiveNavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '../../configs/stitches.config'

export const StyledBottomBar = styled(PrimitiveNavigationMenu.Root, {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  background: '$backgroundGrayLight',
})
