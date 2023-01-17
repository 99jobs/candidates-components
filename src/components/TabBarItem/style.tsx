import * as PrimitiveTabs from '@radix-ui/react-tabs'
import { styled } from '../../configs/stitches.config'

export const StyledTabBarItemIcon = styled('span', {
  color: '$gray',
  margin: '6px 0 4px 0',
})

export const StyledTabBarItemLabel = styled('span', {
  maxWidth: 90,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontWeight: 600,
  fontSize: '$small',
  color: '$gray',
})

export const StyledTabBarItem = styled(PrimitiveTabs.Trigger, {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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
