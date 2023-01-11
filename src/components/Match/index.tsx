import { type ComponentProps } from '@stitches/react'
import Progressbar from 'react-js-progressbar'
import { colors } from '../../configs/colors'
import { StyledMatch } from './style'

export interface StyledMatchProps extends ComponentProps<typeof StyledMatch> {}

export const Match = ({ ...props }: StyledMatchProps) => (
  <StyledMatch {...props}>
    <Progressbar
      input={90}
      trailColor="none"
      trailWidth={12}
      pathWidth={12}
      pathColor={colors.greenSystem}
      textStyle={{ fill: '#fff', fontWeight: 700, fontSize: 58 }}
    />
    match
  </StyledMatch>
)
