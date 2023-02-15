import { styled } from '../../configs/stitches.config'

export const StyledHeader = styled('header', {
  width: '100%',
  paddingX: 20,
  paddingY: 23,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h1: {
    fontWeight: 400,

    strong: {
      fontWeight: 900,
    },
  },
})
