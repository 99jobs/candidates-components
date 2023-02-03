import { type ComponentProps } from '@stitches/react'
import { forwardRef } from 'react'
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
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3332 1L4.99984 8.33333L1.6665 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
