import { type ComponentProps } from '@stitches/react'
import { Skeleton } from '../Skeleton'
import { SubscriptionCardContent } from '../SubscriptionCardContent'
import { StyledSubscriptionCard } from './style'

export interface SubscriptionCardProps extends ComponentProps<typeof StyledSubscriptionCard> {
  /**
   * Indica se está carregando ainda. Útil para quando os itens vierem da API e precisa ter um loader enquanto não carrega
   */
  isLoading?: boolean
}

export const SubscriptionCard = ({ isLoading, children, ...props }: SubscriptionCardProps) => (
  <StyledSubscriptionCard {...props}>
    {isLoading && (
      <>
        <SubscriptionCardContent>
          <Skeleton />

          <br />

          <Skeleton count={2} />
        </SubscriptionCardContent>
        <Skeleton width={64} height={64} />
      </>
    )}

    {!isLoading && children}
  </StyledSubscriptionCard>
)
