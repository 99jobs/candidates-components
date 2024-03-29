import * as PrimitiveTabs from '@radix-ui/react-tabs'
import { styled } from '../../configs/stitches.config'

export const StyledTabBarItemIcon = styled('span', {
  color: '$gray',
  margin: '6px 0 4px 0',
})

export const StyledTabBarItemLabel = styled('span', {
  fontWeight: 600,
  fontSize: '$body',
  color: '$gray',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 1,
})

export const StyledTabBarItem = styled(PrimitiveTabs.Trigger, {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  background: 'transparent',
  marginX: 14,
  cursor: 'pointer',
  paddingBottom: 8,

  '&:hover': {
    [`& ${StyledTabBarItemIcon}`]: {
      color: '$grayDark',
    },
    [`& ${StyledTabBarItemLabel}`]: {
      color: '$grayDark',
    },
  },
})
