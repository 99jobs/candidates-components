import { type ComponentProps } from '@stitches/react'
import { forwardRef } from 'react'
import { MdCheck } from 'react-icons/md'
import { Input } from '../Input'
import { StyledInputHelperText } from '../Input/style'
import {
  StyledCheckboxIndicator,
  StyledCheckboxIndicatorWrapper,
  StyledCheckboxLabel,
  StyledCheckboxRoot,
  StyledCheckboxWrapper,
} from './style'

export interface CheckboxProps
  extends ComponentProps<typeof StyledCheckboxRoot>,
    Pick<ComponentProps<typeof Input>, 'errorText' | 'helperText'> {
  /**
   * A label que ficará ao lado do check
   */
  label: string
}

export const Checkbox = forwardRef(
  ({ label, errorText, helperText, ...props }: CheckboxProps, ref: any) => (
    <StyledCheckboxWrapper data-has-error={errorText !== undefined}>
      {/* Necessário ignorar erro de tipagem pois o props.onChange recebido espera um evento, e o onCheckedChange envia bool */}
      {/* @ts-expect-error */}
      <StyledCheckboxRoot ref={ref} {...props} onCheckedChange={props.onChange}>
        <StyledCheckboxIndicatorWrapper>
          <StyledCheckboxIndicator>
            <MdCheck />
          </StyledCheckboxIndicator>
        </StyledCheckboxIndicatorWrapper>

        <StyledCheckboxLabel>{label}</StyledCheckboxLabel>
      </StyledCheckboxRoot>

      {(errorText || helperText) && (
        <StyledInputHelperText role="alert">{errorText || helperText}</StyledInputHelperText>
      )}
    </StyledCheckboxWrapper>
  )
)

Checkbox.displayName = 'Checkbox'
