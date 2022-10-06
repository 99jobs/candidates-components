import { styled } from '../../configs/stitches.config'

export const StyledInputLabel = styled('label', {
  position: 'absolute',
  top: '$md3',
  left: '$sm2',
  fontWeight: 400,
  fontSize: '$body',
  color: '$gray',
  userSelect: 'none',
  transition: 'top 0.1s linear, font-size 0.1s linear, color 0.1s linear',
})

export const StyledInputField = styled('input', {
  padding: '$md2 $sm2 $sm1 $sm2',
  outline: 'none',
  transition: 'border-color 0.1s linear',
  borderBottom: '1px solid $grayLight',

  '&::placeholder': {
    opacity: 0,
    transition: 'opacity 0.1s linear',
  },
})

export const StyledInputHelperText = styled('span', {
  fontWeight: 400,
  fontSize: '$small',
  color: '$gray',
  marginLeft: '$sm2',
})

export const StyledInputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '$sm2',

  '&:focus-within, &[data-is-active="true"]': {
    [`& ${StyledInputLabel}`]: {
      top: '$sm1',
      fontSize: '$small',
      color: '$bluePrimary',
    },

    [`& ${StyledInputField}`]: {
      borderColor: '$bluePrimary',
      '&::placeholder': {
        opacity: 1,
      },
    },

    [`& ${StyledInputHelperText}`]: {
      color: '$bluePrimary',
    },
  },
})
