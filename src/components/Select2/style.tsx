import ReactSelect from 'react-select'
import { styled } from '../../configs/stitches.config'
import { StyledButton } from '../Button/style'
import { StyledInputField, StyledInputLabel } from '../Input/style'

export const StyledReactSelect = styled(ReactSelect, {
  all: 'unset',
  display: 'block',
  '[class^="custom-select"]': {
    all: 'unset',
  },

  '&.has-error': {
    '.custom-select__menu-list': {
      borderColor: '$redSystemDark',
    },
  },

  '.custom-select__control--menu-is-open': {
    [`& ${StyledInputField}`]: {
      borderBottom: 'none',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },

    '& + .custom-select__menu .custom-select__menu-list': {
      borderTop: 'none',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  },

  '.custom-select__menu-list': {
    position: 'absolute',
    top: '100%',
    right: 0,
    left: 0,
    listStyle: 'none',
    maxHeight: 150,
    overflow: 'auto',
    borderRadius: '$sm',
    backgroundColor: '#fff',
    border: '1px solid $bluePrimary',

    '.custom-select__option': {
      padding: '15px 12px 10px 12px',
      borderBottom: '1px solid $grayLight',
      fontSize: '$body',
      color: '$grayDark',
      display: 'list-item',

      '&:last-of-type': {
        borderBottom: 'none',
      },

      '&.custom-select__option--is-focused': {
        fontWeight: 600,
        backgroundColor: '$bluePrimary',
        color: '$onBluePrimary',
      },
    },
  },

  [`& ${StyledInputField}`]: {
    border: '1px solid $grayLight',
    borderRadius: '$sm',
    paddingY: 0,
    '&::placeholder': {
      opacity: 1,
    },
  },

  [`& ${StyledInputLabel}`]: {
    top: 12,
    left: 9,
  },

  [`& ${StyledButton}`]: {
    top: '50%',
    transform: 'translateY(-50%)',
    color: '$bluePrimary',
  },
})
