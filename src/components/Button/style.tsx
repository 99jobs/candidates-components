import { styled } from '../../configs/stitches.config'

const ButtonWrapper = styled('button', {
  height: '44px',
  borderRadius: '$sm',
  fontFamily: '$sans',
  fontSize: '$sub',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'background-color 0.1s ease-in-out, color 0.1s ease-in-out',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingX: 19,

  defaultVariants: {
    color: 'default',
  },

  variants: {
    color: {
      default: {
        backgroundColor: '$primary',
        color: '$onPrimary',
        border: '1px solid transparent',

        '&:hover, &:active, &:focus': {
          backgroundColor: '$primaryHover',
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        color: '$primary',
        border: '1px solid $primary',

        '&:hover, &:active, &:focus': {
          backgroundColor: '$primaryHover',
          color: '$onPrimary',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$primary',
        border: '1px solid transparent',

        '&:hover, &:active, &:focus': {
          backgroundColor: '$primaryHover',
          color: '$onPrimary',
        },
      },
    },
  },

  '&[disabled]': {
    backgroundColor: '$primaryDisabled',
    color: '$onPrimary',
    border: '1px solid transparent',

    '&:hover, &:active, &:focus': {
      backgroundColor: '$primaryDisabled',
    },
  },

  '& > svg:only-of-type': {
    fontSize: '$h2',
    marginRight: '$sm2',
  },
})

export default ButtonWrapper
