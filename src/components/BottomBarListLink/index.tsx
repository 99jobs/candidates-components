import { type ComponentProps } from '@stitches/react'
import { forwardRef } from 'react'
import { StyledBottomBarListLink } from './style'

export interface BottomBarListLinkProps extends ComponentProps<typeof StyledBottomBarListLink> {
  /**
   * Indica se tem bolinha de notificação
   */
  hasBadge?: boolean
}

export const BottomBarListLink = forwardRef<HTMLAnchorElement, BottomBarListLinkProps>(
  ({ hasBadge, ...props }, ref) => (
    <StyledBottomBarListLink data-has-badge={hasBadge} {...props} ref={ref} />
  )
)

BottomBarListLink.displayName = 'BottomBarListLink'
