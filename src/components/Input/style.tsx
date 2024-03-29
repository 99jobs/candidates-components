import { styled } from '../../configs/stitches.config'
import { StyledButton } from '../Button/style'

export const StyledInputLabel = styled('label', {
  position: 'absolute',
  top: 18,
  left: 0,
  zIndex: -1,
  fontWeight: 600,
  fontSize: '$body',
  color: '$grayDark',
  userSelect: 'none',
  transition: 'top 0.1s linear, font-size 0.1s linear, color 0.1s linear',
})

export const StyledInputField = styled('input', {
  height: 44,
  padding: '14px 8px 0 0',
  outline: 'none',
  borderBottom: '1px solid $gray',
  backgroundColor: 'transparent',

  '&::placeholder': {
    opacity: 0,
    transition: 'opacity 0.1s linear',
  },
})

export const StyledInputHelperText = styled('span', {
  fontWeight: 400,
  fontSize: '$body',
  color: '$grayDark',
  position: 'absolute',
  top: 'calc(100% - 16px)',
})

export const StyledInputContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  [`& ${StyledButton}`]: {
    width: 26,
    height: 26,
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    position: 'absolute',
    top: 14,
    right: 8,
    color: '$grayDark',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '$grayDark',
    },
  },

  '&:focus-within': {
    [`& ${StyledInputLabel}`]: {
      color: '$bluePrimary',
    },

    [`& ${StyledInputField}`]: {
      borderColor: '$bluePrimary',
    },

    [`& ${StyledInputHelperText}`]: {
      color: '$bluePrimary',
    },

    [`& ${StyledButton}`]: {
      color: '$bluePrimary',
    },
  },

  '&:focus-within, &[data-is-active="true"]': {
    [`& ${StyledInputLabel}`]: {
      top: 2,
      fontSize: '$small',
    },

    [`& ${StyledInputField}`]: {
      '&::placeholder': {
        opacity: 1,
      },
    },
  },

  '&[data-has-helper-text="true"]': {
    paddingBottom: 24,
  },

  '&[data-has-error="true"]': {
    [`& ${StyledInputLabel}`]: {
      color: '$redSystemDark',
    },

    [`& ${StyledInputField}`]: {
      borderColor: '$redSystemDark',
    },

    [`& ${StyledInputHelperText}`]: {
      color: '$redSystemDark',
    },

    [`& ${StyledButton}`]: {
      color: '$redSystemDark',
    },
  },

  '&[data-has-icon="true"]': {
    [`& ${StyledInputField}`]: {
      paddingRight: 38,
    },
  },
})
