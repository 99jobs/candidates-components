import { styled } from '../../configs/stitches.config'

export const StyledMatchCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  boxShadow: '0px 1px 5px rgba(35, 34, 34, 0.15)',
  borderRadius: '$md',
  padding: '27px 38px',

  h1: {
    fontSize: '$h2',
    fontWeight: 700,
    color: '$gray',
    marginBottom: 8,
  },

  p: {
    fontSize: 'body',
    fontWeight: 400,
    color: '$gray',
    marginBottom: 24,
  },
})
