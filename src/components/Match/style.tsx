import { styled } from '../../configs/stitches.config'

export const StyledMatch = styled('div', {
  width: 37,
  fontSize: '$small',
  fontWeight: 600,
  color: '$onGrayDark',
  textAlign: 'center',
  position: 'relative',

  span: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    top: '50%',
    marginTop: -16,
    fontSize: 'x-small',
  },
})
