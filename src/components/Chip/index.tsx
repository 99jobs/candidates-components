import { type ComponentProps } from '@stitches/react'
import { StyledChipContainer } from './style'

export interface ChipProps extends ComponentProps<typeof StyledChipContainer> {
  /**
   * O texto do Chip
   */
  label: string
  /**
   * O estilo do chip
   */
  color: 'outlined' | 'urgent' | 'level'
}

export const Chip = ({ label, color, ...props }: ChipProps) => (
  <StyledChipContainer {...props} color={color}>
    {label}
  </StyledChipContainer>
)
