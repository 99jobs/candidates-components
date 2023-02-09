import { type ComponentProps } from '@stitches/react'
import { StyledSubscriptionCardLogo } from './style'

export interface SubscriptionCardLogoProps
  extends ComponentProps<typeof StyledSubscriptionCardLogo> {}

export const SubscriptionCardLogo = ({ ...props }: SubscriptionCardLogoProps) => (
  <StyledSubscriptionCardLogo {...props} />
)
