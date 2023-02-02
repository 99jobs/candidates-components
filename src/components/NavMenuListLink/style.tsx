import * as PrimitiveNavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '../../configs/stitches.config'

export const StyledNavMenuListLink = styled(PrimitiveNavigationMenu.Link, {
  fontSize: '$h2',
  fontWeight: 600,
  color: '$grayDark',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingY: 8,
  borderBottom: '1px solid $grayLight',

  svg: {
    color: '$bluePrimary',
  },
})
