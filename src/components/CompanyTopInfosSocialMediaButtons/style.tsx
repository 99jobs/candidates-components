import { styled } from '../../configs/stitches.config'
import { StyledButton } from '../Button/style'

export const StyledCompanyTopInfosSocialMediaButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  [`${StyledButton}`]: {
    width: 20,
    height: 20,
    backgroundColor: '#125BAD',
    borderRadius: '$xs',
    padding: 3,
    color: '#fff',

    '&:hover': {
      backgroundColor: '#125BAD',
      color: '#fff',
    },
  },
})
