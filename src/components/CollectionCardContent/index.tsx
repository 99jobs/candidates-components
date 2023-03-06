import { type ComponentProps } from '@stitches/react'
import { StyledCollectionCardContent } from './style'

export interface CollectionCardContentProps
  extends ComponentProps<typeof StyledCollectionCardContent> {}

export const CollectionCardContent = ({ ...props }: CollectionCardContentProps) => (
  <StyledCollectionCardContent {...props} />
)
