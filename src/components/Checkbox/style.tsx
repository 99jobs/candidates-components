import * as PrimitiveCheckbox from '@radix-ui/react-checkbox'
import { styled } from '../../configs/stitches.config'
import { StyledInputHelperText } from '../Input/style'

export const StyledCheckboxWrapper = styled('div', {
  position: 'relative',

  '&[data-has-error="true"]': {
    [`& ${StyledInputHelperText}`]: {
      color: '$redSystemDark',
      paddingLeft: 0,
    },
  },
})

export const StyledCheckboxIndicatorWrapper = styled('div', {
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  border: '1px solid $grayLight',
  color: '$onPurpleSystem',
  cursor: 'pointer',
})

export const StyledCheckboxIndicator = styled(PrimitiveCheckbox.Indicator, {})

export const StyledCheckboxLabel = styled('label', {
  fontWeight: 400,
  fontSize: '$body',
  color: '$gray',
  cursor: 'pointer',
  lineHeight: 1,
})

export const StyledCheckboxRoot = styled(PrimitiveCheckbox.Root, {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  background: 'transparent',

  '&[aria-checked="true"]': {
    [`${StyledCheckboxIndicatorWrapper}`]: {
      border: '2px solid $purpleSystem',
      backgroundColor: '$bluePrimary',
    },
  },

  '&[aria-checked="false"]': {
    '&:hover': {
      [`${StyledCheckboxIndicatorWrapper}`]: {
        border: '1px solid $purpleSystem',
      },
    },

    '&[disabled]': {
      [`${StyledCheckboxIndicatorWrapper}`]: {
        border: 'none',
        backgroundColor: '$backgroundGrayLight',
        cursor: 'not-allowed',
      },

      [`${StyledCheckboxLabel}`]: {
        cursor: 'not-allowed',
      },
    },
  },
})
