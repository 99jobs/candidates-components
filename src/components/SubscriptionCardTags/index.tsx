import { type ComponentProps } from '@stitches/react'
import { StyledSubscriptionCardTags } from './style'

export interface SubscriptionCardTagsProps
  extends ComponentProps<typeof StyledSubscriptionCardTags> {}

export const SubscriptionCardTags = ({ ...props }: SubscriptionCardTagsProps) => (
  <StyledSubscriptionCardTags {...props} />
)
