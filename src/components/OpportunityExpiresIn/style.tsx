import { styled } from '../../configs/stitches.config'

export const StyledOpportunityExpiresIn = styled('div', {
  width: 48,
  height: 75,
  lineHeight: '46px',
  backgroundColor: '$backgroundGrayLight',
  borderBottomLeftRadius: '$xs',
  borderBottomRightRadius: '$xs',
  padding: 6,
  gap: 6,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight: 700,
  fontSize: '$small',
  color: '$gray',

  svg: {
    position: 'absolute',
  },
})
