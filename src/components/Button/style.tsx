import { styled } from '../../configs/stitches.config'

const ButtonWrapper = styled('button', {
  borderRadius: '$sm',
  fontFamily: '$sans',
  fontSize: '$sub',
  fontWeight: '500',
  padding: '12px 19px',
  cursor: 'pointer',
  transition: 'background-color 0.1s ease-in-out',
  display: 'inline-flex',
  alignItems: 'center',

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
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$primary',
        border: '1px solid transparent',

        '&:hover, &:active, &:focus': {
          backgroundColor: '$primaryHover',
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

  '& > svg': {
    fontSize: 'inherit',
    marginRight: '$sm2',
  },
})

export default ButtonWrapper
