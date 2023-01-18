import { type ComponentProps } from '@stitches/react'
import { OpportunityCardContent } from '../OpportunityCardContent'
import { OpportunityCardHero } from '../OpportunityCardHero'
import { Skeleton } from '../Skeleton'
import { StyledOpportunityCard } from './style'

export interface OpportunityCardProps extends ComponentProps<typeof StyledOpportunityCard> {
  /**
   * Indica se está carregando ainda. Útil para quando os itens vierem da API e precisa ter um loader enquanto não carrega
   */
  isLoading?: boolean
}

export const OpportunityCard = ({ isLoading, children, ...props }: OpportunityCardProps) => (
  <StyledOpportunityCard {...props}>
    {isLoading && (
      <>
        <OpportunityCardHero>
          <Skeleton height="100%" style={{ display: 'flex' }} />
        </OpportunityCardHero>

        <OpportunityCardContent>
          <Skeleton />

          <Skeleton count={2} />
        </OpportunityCardContent>
      </>
    )}

    {!isLoading && children}
  </StyledOpportunityCard>
)
