import * as PrimitiveNavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '../../configs/stitches.config'

export const StyledBottomBarList = styled(PrimitiveNavigationMenu.List, {
  maxWidth: 360,
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: 72,
})
