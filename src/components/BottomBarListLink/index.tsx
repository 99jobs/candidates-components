import { type ComponentProps } from '@stitches/react'
import { forwardRef } from 'react'
import { StyledBottomBarListLink } from './style'

// export interface BottomBarListLinkProps extends ComponentProps<typeof StyledBottomBarListLink> {
//   /**
//    * Indica se tem bolinha de notificação
//    */
//   hasNotification?: boolean
// }

// export const BottomBarListLink = ({ hasNotification, ...props }: BottomBarListLinkProps) => (
//   <StyledBottomBarListLink
//     data-has-notification={hasNotification}
//     {...props}
//   ></StyledBottomBarListLink>
// )

export interface BottomBarListLinkProps extends ComponentProps<typeof StyledBottomBarListLink> {
  /**
   * Indica se tem bolinha de notificação
   */
  hasNotification?: boolean
}

export const BottomBarListLink = forwardRef<HTMLAnchorElement, BottomBarListLinkProps>(
  ({ hasNotification, ...props }, ref) => (
    <StyledBottomBarListLink data-has-notification={hasNotification} {...props} ref={ref} />
  )
)

BottomBarListLink.displayName = 'BottomBarListLink'
