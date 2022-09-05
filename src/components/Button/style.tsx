import { styled } from '../../configs/stitches.config'

const ButtonWrapper = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  marginX1: 100,
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  variants: {
    color: {
      violet: {
        backgroundColor: 'violet',
      },
      red: {
        backgroundColor: 'red',
        color: 'red',
        fontSize: 8,
      },
    },
  },
})

export default ButtonWrapper
