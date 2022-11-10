import { useId, type ComponentProps } from 'react'
import {
  StyledRadio,
  StyledRadioGroupRoot,
  StyledRadioIndicator,
  StyledRadioIndicatorWrapper,
  StyledRadioLabel,
} from './style'

export interface RadioGroupProps extends ComponentProps<typeof StyledRadioGroupRoot> {}
export const RadioGroup = ({ children, ...props }: RadioGroupProps) => (
  <StyledRadioGroupRoot {...props}>{children}</StyledRadioGroupRoot>
)

export interface RadioProps extends ComponentProps<typeof StyledRadio> {
  /**
   * A label que ficará ao lado do check
   */
  label: string
}

export const Radio = ({ label, ...props }: RadioProps) => {
  const generatedId = useId()
  const id = props.id || generatedId

  return (
    <StyledRadio {...props} id={id}>
      <StyledRadioIndicatorWrapper>
        <StyledRadioIndicator>
          <span></span>
        </StyledRadioIndicator>
      </StyledRadioIndicatorWrapper>

      <StyledRadioLabel htmlFor={id}>{label}</StyledRadioLabel>
    </StyledRadio>
  )
}
