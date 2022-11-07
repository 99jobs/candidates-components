import * as PrimitiveRadioGroup from '@radix-ui/react-radio-group'
import { styled } from '../../configs/stitches.config'
import {
  StyledCheckboxIndicator,
  StyledCheckboxIndicatorWrapper,
  StyledCheckboxLabel,
  StyledCheckboxRoot,
} from '../Checkbox/style'

export const StyledRadioIndicatorWrapper = styled('div', StyledCheckboxIndicatorWrapper, {
  borderRadius: '50%',
})

export const StyledRadioIndicator = styled(PrimitiveRadioGroup.Indicator, StyledCheckboxIndicator, {
  transform: 'none',
  height: 24,
  span: {
    display: 'inline-flex',
    width: 10,
    height: 10,
    backgroundColor: '$purpleSystem',
    borderRadius: '50%',
  },
})

export const StyledRadioLabel = styled('label', StyledCheckboxLabel)

export const StyledRadio = styled(PrimitiveRadioGroup.Item, StyledCheckboxRoot, {
  '&[aria-checked="true"]': {
    [`${StyledRadioIndicatorWrapper}`]: {
      backgroundColor: '$onPurpleSystem',
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
