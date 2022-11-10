import * as PrimitiveRadioGroup from '@radix-ui/react-radio-group'
import { styled } from '../../configs/stitches.config'
import { StyledInputHelperText } from '../Input/style'

export const StyledRadioGroupWrapper = styled('div', {
  position: 'relative',

  '&[data-has-error="true"]': {
    [`& ${StyledInputHelperText}`]: {
      color: '$redSystemDark',
      paddingLeft: 0,
    },
  },
})

export const StyledRadioWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',

  '&[data-has-error="true"]': {
    [`& ${StyledInputHelperText}`]: {
      color: '$redSystemDark',
      paddingLeft: 0,
    },
  },
})

export const StyledRadioIndicatorWrapper = styled('div', {
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $grayLight',
  color: '$onPurpleSystem',
  cursor: 'pointer',
  borderRadius: '50%',
})

export const StyledRadioIndicator = styled(PrimitiveRadioGroup.Indicator, {
  transform: 'none',
  span: {
    display: 'inline-flex',
    width: 10,
    height: 10,
    backgroundColor: '$purpleSystem',
    borderRadius: '50%',
  },
})

export const StyledRadioLabel = styled('label', {
  fontWeight: 400,
  fontSize: '$body',
  color: '$gray',
  cursor: 'pointer',
  lineHeight: 1,
})

export const StyledRadio = styled(PrimitiveRadioGroup.Item, {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  background: 'transparent',

  '&[aria-checked="true"]': {
    [`${StyledRadioIndicatorWrapper}`]: {
      border: '2px solid $purpleSystem',
      backgroundColor: '$bluePrimary',
    },

    [`${StyledRadioIndicatorWrapper}`]: {
      backgroundColor: '$onPurpleSystem',
    },
  },

  '&[aria-checked="false"]': {
    '&:hover': {
      [`${StyledRadioIndicatorWrapper}`]: {
        border: '1px solid $purpleSystem',
      },
    },

    '&[disabled]': {
      [`${StyledRadioIndicatorWrapper}`]: {
        border: 'none',
        backgroundColor: '$backgroundGrayLight',
        cursor: 'not-allowed',
      },

      [`${StyledRadioLabel}`]: {
        cursor: 'not-allowed',
      },
    },
  },
})

export const StyledRadioGroupRoot = styled(PrimitiveRadioGroup.Root, {
  display: 'flex',
  gap: 16,
  flexDirection: 'row',

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  '&[data-orientation="horizontal"]': {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
})
