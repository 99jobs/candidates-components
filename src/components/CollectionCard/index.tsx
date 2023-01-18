import { ComponentProps } from '@stitches/react'
import { StyledCollectionCard } from './style'

export interface CollectionCardProps extends ComponentProps<typeof StyledCollectionCard> {}

export const CollectionCard = ({ ...props }: CollectionCardProps) => (
  <StyledCollectionCard {...props} />
)
