import { type ComponentProps } from '@stitches/react'
import { type ReactNode } from 'react'
import { Skeleton } from '../Skeleton'

import { StyledTabBarItem, StyledTabBarItemIcon, StyledTabBarItemLabel } from './style'

export interface TabBarItemProps extends ComponentProps<typeof StyledTabBarItem> {
  /**
   * Ícone da tab
   */
  icon?: ReactNode

  /**
   * Texto da tab
   */
  label: string

  /**
   * Indica se está carregando ainda. Útil para quando os itens vierem da API e precisa ter um loader enquanto não carrega
   */
  isLoading?: boolean
}

export const TabBarItem = ({ icon, label, isLoading, ...props }: TabBarItemProps) => (
  <StyledTabBarItem {...props}>
    {isLoading ? (
      <>
        <StyledTabBarItemIcon>
          <Skeleton circle width={24} height={24} style={{ marginBottom: 6 }} />
        </StyledTabBarItemIcon>
        <StyledTabBarItemLabel>
          <Skeleton width={90} height={10} />
        </StyledTabBarItemLabel>
      </>
    ) : (
      <>
        {icon && <StyledTabBarItemIcon>{icon}</StyledTabBarItemIcon>}
        <StyledTabBarItemLabel>{label}</StyledTabBarItemLabel>
      </>
    )}
  </StyledTabBarItem>
)
