import { type ComponentProps } from '@stitches/react'
import { StyledSubscriptionCardOpenUntil } from './style'

export interface SubscriptionCardOpenUntilProps
  extends ComponentProps<typeof StyledSubscriptionCardOpenUntil> {}

export const SubscriptionCardOpenUntil = ({ ...props }: SubscriptionCardOpenUntilProps) => (
  <StyledSubscriptionCardOpenUntil {...props} />
)
