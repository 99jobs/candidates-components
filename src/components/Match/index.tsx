import { type ComponentProps } from '@stitches/react'
import Progressbar from 'react-js-progressbar'
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
    <Progressbar
      input={match}
      trailColor="none"
      trailWidth={12}
      pathWidth={12}
      pathColor={colors.greenSystem}
      textStyle={{ fill: '#fff', fontWeight: 700, fontSize: 58 }}
    />
    match
  </StyledMatch>
)
