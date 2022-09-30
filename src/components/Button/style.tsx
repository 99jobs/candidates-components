import { styled } from '../../configs/stitches.config'

const ButtonWrapper = styled('button', {
  width: '100%',
  height: '44px',
  borderRadius: '$sm',
  fontSize: 14,
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'background-color 0.1s ease-in-out, color 0.1s ease-in-out',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingX: 22,
  gap: '$md1',

  '@md': {
    width: 'auto',
  },

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

        '&:hover': {
          backgroundColor: '$bluePrimaryDark',
          color: '$onBluePrimaryDark',
        },
      },
    },
  },

  '&[disabled]': {
    backgroundColor: '$grayLight',
    color: '#4D5056',

    '&:hover': {
      backgroundColor: '$grayLight',
      color: '#4D5056',
    },
  },

  '& > svg': {
    svgFontSize: 16,
  },
})

export default ButtonWrapper
