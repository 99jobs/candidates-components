import { type ComponentProps } from '@stitches/react'
import { Calendar } from 'iconsax-react'
import { StyledSchedulingButton, StyledSchedulingButtonIcon } from './style'

export interface SchedulingButtonProps extends ComponentProps<typeof StyledSchedulingButton> {
  /**
   * Número que aparaecerá na badge ao lado do ícone. Geralmente qtd. de notificações.
   */
  badgeNumber?: number
}

export const SchedulingButton = ({ badgeNumber, children, ...props }: SchedulingButtonProps) => (
  <StyledSchedulingButton {...props}>
    <StyledSchedulingButtonIcon>
      {badgeNumber && <span>{badgeNumber}</span>}
      <Calendar variant="Linear" size={34} />
    </StyledSchedulingButtonIcon>

    {children}
  </StyledSchedulingButton>
)
