import { styled } from '../../configs/stitches.config'

export const StyledEvaluationCard = styled('div', {
  width: 275,
  flexShrink: 0,
  padding: 18,
  backgroundColor: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  borderRadius: '$md',
  border: '1px solid rgba(233, 233, 233, 0.6)',

  h1: {
    fontSize: '$body',
    fontWeight: 700,
    margin: 0,
    color: '$grayDark',
  },
  h2: {
    fontSize: '$body',
    fontWeight: 400,
    marginBottom: 16,
    color: '$grayDark',
  },
  p: {
    fontSize: '$body',
    fontWeight: 400,
    margin: 0,
    color: '$gray',
  },
})
