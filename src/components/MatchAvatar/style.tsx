import { styled } from '../../configs/stitches.config'

export const StyledMatchAvatar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '$body',
  color: '$grayDark',
  fontWeight: 400,

  img: {
    width: 100,
    heigth: 100,
    marginBottom: 12,
  },
})
