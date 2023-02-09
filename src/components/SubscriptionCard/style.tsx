import { styled } from '../../configs/stitches.config'

export const StyledSubscriptionCard = styled('div', {
  width: '100%',
  maxWidth: 320,
  display: 'flex',
  flexDirection: 'row',
  gap: 24,
  padding: '14px 11px 16px 18px',
  background: '#FFFFFF',
  border: '1px solid rgba(233, 233, 233, 0.6)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  borderRadius: '$md',

  '@md': {
    maxWidth: 560,
  },

  '@lg': {
    maxWidth: 593,
  },
})
