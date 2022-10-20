import { styled } from '../../configs/stitches.config'
import { StyledButton } from '../Button/style'
import { StyledInputField, StyledInputLabel, StyledInputWrapper } from '../Input/style'

export const StyledSelectContainer = styled('div', {
  position: 'relative',

  [`& ${StyledInputWrapper}`]: {
    [`& ${StyledInputField}`]: {
      border: '1px solid #ABB3BF',
      borderRadius: 6,
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

    '&:focus-within': {
      [`& ${StyledInputLabel}`]: {
        top: 0,
        backgroundColor: '#fff',
        fontSize: '$small',
      },
    },
  },

  '&[aria-expanded="true"]': {
    [`& ${StyledInputField}`]: {
      borderColor: '$bluePrimary',
      borderBottom: 'none',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },

    ul: {
      border: '1px solid $bluePrimary',
      borderTop: 'none',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  },

  ul: {
    position: 'absolute',
    top: '100%',
    right: 0,
    left: 0,
    listStyle: 'none',
    maxHeight: 150,
    overflow: 'auto',
    borderRadius: 6,

    li: {
      padding: '15px 12px  10px 12px',
      borderBottom: '1px solid #ABB3BF',
      fontSize: 14,
      color: '#232222',

      '&:last-of-type': {
        borderBottom: 'none',
      },

      '&[aria-selected="true"]': {
        fontWeight: 600,
        backgroundColor: '$bluePrimary',
        color: '#fff',
      },
    },
  },
})

export const StyledSelectTagsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
})
