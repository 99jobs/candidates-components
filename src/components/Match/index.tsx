import { type ComponentProps } from '@stitches/react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { colors } from '../../configs/colors'
import { StyledMatch } from './style'

export interface StyledMatchProps extends ComponentProps<typeof StyledMatch> {
  /**
   * Qual o valor do match, entre 0 e 100
   */
  match: number
}

export const Match = ({ match, ...props }: StyledMatchProps) => (
  <StyledMatch {...props}>
    <span>{match || 0}%</span>
    <CircularProgressbar
      value={match}
      styles={buildStyles({
        pathColor: colors.greenSystem,
        trailColor: 'transparent',
      })}
    />
    match
  </StyledMatch>
)
