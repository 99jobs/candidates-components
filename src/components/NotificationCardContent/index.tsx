import { type ComponentProps } from '@stitches/react'
import { StyledNotificationCardContent } from './style'

export interface NotificationCardContentProps
  extends ComponentProps<typeof StyledNotificationCardContent> {}

export const NotificationCardContent = ({ ...props }: NotificationCardContentProps) => (
  <StyledNotificationCardContent {...props} />
)
