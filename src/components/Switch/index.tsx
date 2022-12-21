import { type ComponentProps } from '@stitches/react'
import { forwardRef } from 'react'
import { Input } from '../Input'
import { StyledInputHelperText } from '../Input/style'
import { StyledSwitchRoot, StyledSwitchThumb, StyledSwitchWrapper, StyledwitchLabel } from './style'

export interface SwitchProps
  extends ComponentProps<typeof StyledSwitchRoot>,
    Pick<ComponentProps<typeof Input>, 'errorText' | 'helperText'> {
  /**
   * A label que ficará ao lado do check
   */
  label: string
}

export const Switch = forwardRef(
  ({ label, errorText, helperText, ...props }: SwitchProps, ref: any) => (
    <StyledSwitchWrapper data-has-error={errorText !== undefined}>
      <StyledwitchLabel>{label}</StyledwitchLabel>
      {/* Necessário ignorar erro de tipagem pois o props.onChange recebido espera um evento, e o onCheckedChange envia bool */}
      {/* @ts-expect-error */}
      <StyledSwitchRoot ref={ref} {...props} onCheckedChange={props.onChange}>
        <StyledSwitchThumb aria-label={label} role="button" />
      </StyledSwitchRoot>

      {(errorText || helperText) && (
        <StyledInputHelperText role="alert">{errorText || helperText}</StyledInputHelperText>
      )}
    </StyledSwitchWrapper>
  )
)

Switch.displayName = 'Switch'
