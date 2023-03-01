import { styled } from '../../configs/stitches.config'

export const StyledPageSectionTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 16,
  gap: 12,
  paddingX: 10,

  h2: {
    margin: 0,
    color: '$grayDark',
  },
})
