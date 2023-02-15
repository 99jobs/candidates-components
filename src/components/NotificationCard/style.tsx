import { styled } from '../../configs/stitches.config'

export const StyledNotificationCard = styled('li', {
  width: '100%',
  maxWidth: 320,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20,
  padding: '16px 0 24px 0',
  background: '#FFFFFF',
  borderTop: '1px solid $grayLight',
  textDecoration: 'none',

  '&:last-of-type': {
    borderBottom: '1px solid $grayLight',
  },

  '@md': {
    maxWidth: 560,
  },

  '@lg': {
    maxWidth: 593,
  },

  svg: {
    flexShrink: 0,
    color: '$bluePrimary',
  },
})
