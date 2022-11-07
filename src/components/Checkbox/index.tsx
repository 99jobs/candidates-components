import { type ComponentProps } from '@stitches/react'
import { useId } from 'react'
import { MdCheck } from 'react-icons/md'
import {
  StyledCheckboxIndicator,
  StyledCheckboxIndicatorWrapper,
  StyledCheckboxLabel,
  StyledCheckboxRoot,
} from './style'

export interface CheckboxProps extends ComponentProps<typeof StyledCheckboxRoot> {}

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const id = useId()

  return (
    <StyledCheckboxRoot {...props} id={id}>
      <StyledCheckboxIndicatorWrapper>
        <StyledCheckboxIndicator>
          <MdCheck />
        </StyledCheckboxIndicator>
      </StyledCheckboxIndicatorWrapper>

      <StyledCheckboxLabel htmlFor={id}>Brasil</StyledCheckboxLabel>
    </StyledCheckboxRoot>
  )
}
