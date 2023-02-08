import { type ComponentProps } from '@stitches/react'
import { StyledSubscriptionCardContent } from './style'

export interface SubscriptionCardContentProps
  extends ComponentProps<typeof StyledSubscriptionCardContent> {}

export const SubscriptionCardContent = ({ ...props }: SubscriptionCardContentProps) => (
  <StyledSubscriptionCardContent {...props} />
)
