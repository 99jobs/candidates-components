import { styled } from '../../configs/stitches.config'
import { StyledButton } from '../Button/style'

export const StyledHeader = styled('header', {
  width: '100%',
  paddingX: 20,
  paddingY: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h1: {
    fontSize: '$h2',
    fontWeight: 400,

    strong: {
      fontSize: 'inherit',
      fontWeight: 600,
    },
  },

  h2: {
    fontSize: '$body',
    fontWeight: 400,
  },

  [`& ${StyledButton}`]: {
    paddingX: 12,
  },
})
