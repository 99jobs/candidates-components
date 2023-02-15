import { type ComponentProps } from '@stitches/react'
import { ArrowRight2 } from 'iconsax-react'
import { NotificationCardContent } from '../NotificationCardContent'
import { Skeleton } from '../Skeleton'
import { StyledNotificationCard } from './style'

export interface NotificationCardProps extends ComponentProps<typeof StyledNotificationCard> {
  /**
   * Indica se está carregando ainda. Útil para quando os itens vierem da API e precisa ter um loader enquanto não carrega
   */
  isLoading?: boolean
}

export const NotificationCard = ({ isLoading, children, ...props }: NotificationCardProps) => (
  <StyledNotificationCard {...props}>
    {isLoading && (
      <>
        <Skeleton width={64} height={64} />
        <NotificationCardContent>
          <Skeleton />

          <br />

          <Skeleton count={2} />
        </NotificationCardContent>
      </>
    )}

    {!isLoading && (
      <>
        {children} <ArrowRight2 size={12} />
      </>
    )}
  </StyledNotificationCard>
)
