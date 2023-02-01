import * as PrimitiveNavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '../../configs/stitches.config'

export const StyledNavMenuList = styled(PrimitiveNavigationMenu.List, {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray',
    marginBottom: 24,
  },
})
