import { forwardRef, type ComponentProps } from 'react'
import { Input } from '../Input'
import { StyledInputHelperText } from '../Input/style'
import {
  StyledRadio,
  StyledRadioGroupRoot,
  StyledRadioGroupWrapper,
  StyledRadioIndicator,
  StyledRadioIndicatorWrapper,
  StyledRadioLabel,
  StyledRadioWrapper,
} from './style'

export interface RadioGroupProps
  extends ComponentProps<typeof StyledRadioGroupRoot>,
    Pick<ComponentProps<typeof Input>, 'errorText' | 'helperText'> {}

export const RadioGroup = forwardRef(
  ({ children, errorText, helperText, ...props }: RadioGroupProps, ref: any) => (
    <StyledRadioGroupWrapper data-has-error={errorText !== undefined}>
      {/* Necessário ignorar erro de tipagem pois o props.onChange recebido espera um evento, e o onCheckedChange envia bool */}
      {/* @ts-expect-error */}
      <StyledRadioGroupRoot ref={ref} {...props} onValueChange={props.onChange}>
        {children}
      </StyledRadioGroupRoot>

      {(errorText || helperText) && (
        <StyledInputHelperText role="alert">{errorText || helperText}</StyledInputHelperText>
      )}
    </StyledRadioGroupWrapper>
  )
)

RadioGroup.displayName = 'RadioGroup'

export interface RadioProps extends ComponentProps<typeof StyledRadio> {
  /**
   * A label que ficará ao lado do check
   */
  label: string
}

export const Radio = ({ label, ...props }: RadioProps) => (
  <StyledRadioWrapper>
    <StyledRadio {...props}>
      <StyledRadioIndicatorWrapper>
        <StyledRadioIndicator>
          <span></span>
        </StyledRadioIndicator>
      </StyledRadioIndicatorWrapper>

      <StyledRadioLabel>{label}</StyledRadioLabel>
    </StyledRadio>
  </StyledRadioWrapper>
)
