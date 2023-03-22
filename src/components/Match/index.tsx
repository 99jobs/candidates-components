import { type ComponentProps } from '@stitches/react'
import { StyledMatch } from './style'

export interface StyledMatchProps extends ComponentProps<typeof StyledMatch> {
  /**
   * Qual o valor do match, entre 0 e 100
   */
  match: number
}

export const Match = ({ match, ...props }: StyledMatchProps) => (
  <StyledMatch {...props}>match</StyledMatch>
)
