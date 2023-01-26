import { styled } from '../../configs/stitches.config'

export const StyledButton = styled('button', {
  height: '44px',
  borderRadius: '$xxlg',
  fontSize: '$body',
  fontWeight: 700,
  cursor: 'pointer',
  transition:
    'background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingX: 22,
  gap: 9,
  textDecoration: 'none',

  defaultVariants: {
    color: 'default',
  },

  variants: {
    color: {
      default: {
        backgroundColor: '$bluePrimary',
        color: '$onBluePrimary',

        '&:hover': {
          backgroundColor: '$bluePrimaryDark',
          color: '$onBluePrimaryDark',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$bluePrimary',
        border: '1px solid $bluePrimary',

        '&:hover': {
          backgroundColor: '$bluePrimaryDark',
          color: '$onBluePrimaryDark',
          borderColor: '$bluePrimaryDark',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$bluePrimary',
        border: '1px solid transparent',

        '&:hover': {
          borderColor: '$bluePrimary',
        },
      },
    },
  },

  '&[disabled]': {
    backgroundColor: '$grayLight',
    color: '$gray',
    border: 'none',
    cursor: 'not-allowed',

    '&:hover': {
      backgroundColor: '$grayLight',
      color: '$gray',
    },
  },
})

export const StyledButtonLink = styled('a', StyledButton, {
  '&[disabled]': {
    pointerEvents: 'none',
  },
})
