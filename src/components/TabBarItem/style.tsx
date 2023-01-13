import * as PrimitiveTabs from '@radix-ui/react-tabs'
import { styled } from '../../configs/stitches.config'

export const StyledTabBarItemIcon = styled('span', {
  color: '$gray',
})

export const StyledTabBarItemLabel = styled('span', {
  width: 95,
  fontWeight: 600,
  fontSize: '$small',
  color: '$gray',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 2,
})

export const StyledTabBarItem = styled(PrimitiveTabs.Trigger, {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  background: 'transparent',
  marginX: 14,
  cursor: 'pointer',
  borderBottom: '4px solid transparent',
  paddingBottom: 6,

  '&:hover': {
    [`& ${StyledTabBarItemIcon}`]: {
      color: '$grayDark',
    },
    [`& ${StyledTabBarItemLabel}`]: {
      color: '$grayDark',
    },
  },

  '&[data-state="active"]': {
    borderBottomColor: '$bluePrimary',
  },
})
