import { ComponentProps } from 'react'
import { StyledChipContainer } from './style'

export interface ChipProps extends ComponentProps<typeof StyledChipContainer> {
  /**
   * O texto do Chip
   */
  label: string
  /**
   * A cor do chip
   */
  color: 'actingMode' | 'pcd' | 'highlight' | 'urgent' | 'level'
}

export const Chip = ({ label, color, ...props }: ChipProps) => (
  <StyledChipContainer {...props} color={color}>
    {label}
  </StyledChipContainer>
)
