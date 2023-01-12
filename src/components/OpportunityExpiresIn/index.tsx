import { type ComponentProps } from '@stitches/react'
import { Clock } from 'iconsax-react'
import { StyledOpportunityExpiresIn } from './style'

export interface OpportunityExpiresInProps
  extends ComponentProps<typeof StyledOpportunityExpiresIn> {
  /**
   * texto que fica acima do ícone do relógio
   */
  aboveIcon: string
  /**
   * texto que fica abaixo do ícone do relógio
   */
  bellowIcon: string
}

export const OpportunityExpiresIn = ({
  aboveIcon = 'restam',
  bellowIcon,
  ...props
}: OpportunityExpiresInProps) => (
  <StyledOpportunityExpiresIn {...props}>
    {aboveIcon} <Clock /> {bellowIcon}
  </StyledOpportunityExpiresIn>
)
