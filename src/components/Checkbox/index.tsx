import { type ComponentProps } from '@stitches/react'
import { useId } from 'react'
import { MdCheck } from 'react-icons/md'
import {
  StyledCheckboxIndicator,
  StyledCheckboxIndicatorWrapper,
  StyledCheckboxLabel,
  StyledCheckboxRoot,
} from './style'

export interface CheckboxProps extends ComponentProps<typeof StyledCheckboxRoot> {
  /**
   * A label que ficará ao lado do check
   */
  label: string
}

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  const generatedId = useId()
  const id = props.id || generatedId

  return (
    <StyledCheckboxRoot {...props} id={id}>
      <StyledCheckboxIndicatorWrapper>
        <StyledCheckboxIndicator>
          <MdCheck />
        </StyledCheckboxIndicator>
      </StyledCheckboxIndicatorWrapper>

      <StyledCheckboxLabel htmlFor={id}>{label}</StyledCheckboxLabel>
    </StyledCheckboxRoot>
  )
}
