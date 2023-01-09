import { type ComponentProps } from '@stitches/react'
import { TabBarItem } from '../TabBarItem'
import { TabBarItems } from '../TabBarItems'
import { StyledTabBar } from './style'

export interface TabBarProps extends ComponentProps<typeof StyledTabBar> {
  /**
   * Indica se está carregando ainda. Útil para quando os itens vierem da API e precisa ter um loader enquanto não carrega
   */
  isLoading?: boolean
}

export const TabBar = ({ isLoading, children, ...props }: TabBarProps) => (
  <StyledTabBar {...props}>
    {isLoading && (
      <TabBarItems aria-label="carregando tabs">
        {[...Array(10)].map((_, index) => (
          <TabBarItem isLoading value={index.toString()} label={index.toString()} key={index} />
        ))}
      </TabBarItems>
    )}

    {!isLoading && children}
  </StyledTabBar>
)
