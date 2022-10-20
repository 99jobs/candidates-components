import { styled } from '../../configs/stitches.config'

export const StyledTagContainer = styled('button', {
  backgroundColor: '$bluePrimary',
  borderRadius: '$md',
  padding: 8,
  gap: 21,
  display: 'inline-flex',
  alignItems: 'center',
  color: '$onBluePrimary',
  fontWeight: 600,
  fontSize: '$small',

  '&[data-has-remove-icon="false"]': {
    paddingX: 8,
    paddingY: 4,
  },
})
