import { type ComponentProps } from '@stitches/react'
import { StyledBottomBarListLink } from './style'

export interface BottomBarListLinkProps extends ComponentProps<typeof StyledBottomBarListLink> {
  /**
   * Indica se tem bolinha de notificação
   */
  hasNotification?: boolean
}

export const BottomBarListLink = ({ hasNotification, ...props }: BottomBarListLinkProps) => (
  <StyledBottomBarListLink
    data-has-notification={hasNotification}
    {...props}
  ></StyledBottomBarListLink>
)
