import ReactSelect from 'react-select'
import { styled } from '../../configs/stitches.config'
import { StyledInputHelperText } from '../Input/style'

export const StyledReactSelectWrapper = styled('div', {
  position: 'relative',

  '&[data-has-error="true"]': {
    '.custom-select__placeholder': {
      color: '$redSystemDark',
    },

    '.custom-select__control': {
      borderColor: '$redSystemDark',
    },

    [`& ${StyledInputHelperText}`]: {
      color: '$redSystemDark',
    },

    '.custom-select__indicators': {
      svg: {
        color: '$redSystemDark',
      },
    },
  },
})

export const StyledReactSelect = styled(ReactSelect, {
  maxWidth: '400px',

  '.custom-select__value-container': {
    padding: '4px 14px',
    gap: 6,
  },

  '.custom-select__control': {
    minHeight: 44,
    outline: 'none',
    border: '1px solid $grayLight',
    backgroundColor: 'transparent',
    borderRadius: '$sm',
  },

  '.custom-select__placeholder': {
    fontWeight: 400,
    fontSize: '$body',
    color: '$gray',
  },

  '.custom-select__indicators': {
    width: 38,
    justifyContent: 'center',
    svg: {
      fontSize: 28,
      color: '$bluePrimary',
    },
  },

  '.custom-select__multi-value__label': {
    all: 'inherit',
    padding: 0,
  },

  '.custom-select__multi-value__remove': {
    all: 'unset',
    padding: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    '&:hover': {
      backgroundColor: 'inherit',
      color: 'inherit',
    },
  },

  '.custom-select__menu': {
    borderRadius: '$sm',
    backgroundColor: '#fff',
    border: '1px solid $bluePrimary',
    boxShadow: 'none',
    overflow: 'hidden',

    '.custom-select__menu-list': {
      maxHeight: 150,
      padding: 0,

      '.custom-select__option': {
        padding: '15px 12px 10px 12px',
        borderBottom: '1px solid $grayLight',
        fontSize: '$body',
        color: '$grayDark',

        '&:last-of-type': {
          borderBottom: 'none',
        },

        '&.custom-select__option--is-focused, &.custom-select__option--is-selected': {
          fontWeight: 600,
          backgroundColor: '$bluePrimary',
          color: '$onBluePrimary',
        },
      },
    },
  },
})

export const StyledNoOption = styled('span', {
  padding: '10px 12px',
  fontSize: '$body',
  color: '$grayDark',
  textAlign: 'center',
  display: 'inline-flex',
})
