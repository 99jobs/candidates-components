import { type ComponentProps } from '@stitches/react'
import { StyledNotificationCardLogo } from './style'

export interface NotificationCardLogoProps
  extends ComponentProps<typeof StyledNotificationCardLogo> {}

export const NotificationCardLogo = ({ ...props }: NotificationCardLogoProps) => (
  <StyledNotificationCardLogo {...props} />
)
