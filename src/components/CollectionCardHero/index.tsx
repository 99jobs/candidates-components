import { type ComponentProps } from '@stitches/react'
import { StyledCollectionCardHero } from './style'

export interface CollectionCardHeroProps extends ComponentProps<typeof StyledCollectionCardHero> {}

export const CollectionCardHero = ({ ...props }: CollectionCardHeroProps) => (
  <StyledCollectionCardHero {...props} />
)
