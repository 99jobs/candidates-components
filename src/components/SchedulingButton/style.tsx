import { styled } from '../../configs/stitches.config'

export const StyledSchedulingButtonIcon = styled('span', {
  width: 72,
  height: 72,
  backgroundColor: '$graySoft',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',
  position: 'relative',

  span: {
    width: 18,
    height: 18,
    backgroundColor: '$purpleSystemDark',
    color: '$onPurpleSystemDark',
    position: 'absolute',
    top: 7,
    left: 7,
    borderRadius: '50%',
    fontSize: '$body',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const StyledSchedulingButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontWeight: 700,
  fontSize: '$h2',
  color: '$grayDark',
  backgroundColor: 'transparent',
  textDecoration: 'none',
})
