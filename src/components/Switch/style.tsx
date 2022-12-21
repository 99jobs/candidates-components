import * as PrimitiveSwitch from '@radix-ui/react-switch'
import { styled } from '../../configs/stitches.config'
import { StyledCheckboxLabel } from '../Checkbox/style'
import { StyledInputHelperText } from '../Input/style'

export const StyledSwitchWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 12,
  position: 'relative',

  '&[data-has-error="true"]': {
    [`& ${StyledInputHelperText}`]: {
      color: '$redSystemDark',
      paddingLeft: 0,
    },
  },
})

export const StyledwitchLabel = styled('label', StyledCheckboxLabel)

export const StyledSwitchThumb = styled(PrimitiveSwitch.Thumb, {
  width: 16,
  height: 16,
  backgroundColor: '$onGrayLight',
  borderRadius: '50%',
  position: 'absolute',
  top: 'auto',
  transition: 'left 0.2s ease-in-out',
})

export const StyledSwitchRoot = styled(PrimitiveSwitch.Root, {
  width: 48,
  height: 24,
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: '$grayLight',
  borderRadius: 30,
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',

  input: {
    position: 'absolute',
    top: '-24px',
    right: '-24px',
    opacity: 0,
  },

  '&[aria-checked="true"]': {
    border: '2px solid $purpleSystem',
    backgroundColor: '$bluePrimary',
    [`${StyledSwitchThumb}`]: {
      left: 24,
    },
  },

  '&[aria-checked="false"]': {
    [`${StyledSwitchThumb}`]: {
      left: 4,
    },
  },

  '&[disabled]': {
    backgroundColor: '$backgroundGrayLight',
    cursor: 'not-allowed',
  },
})
