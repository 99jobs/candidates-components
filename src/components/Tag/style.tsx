import { styled } from '../../configs/stitches.config'

export const StyledTagContainer = styled('div', {
  backgroundColor: '$bluePrimary',
  borderRadius: '$md',
  padding: 8,
  gap: 21,
  display: 'inline-flex',
  alignItems: 'center',
  color: '$onBluePrimary',
  fontWeight: 600,
  fontSize: '$small',

  span: {
    fontSize: 'inherit',
  },

  button: {
    backgroundColor: 'inherit',
    border: 'none',
    padding: 0,
    display: 'inline-flex',
    color: 'inherit',
    cursor: 'pointer',
  },
})
