import { type ComponentProps } from '@stitches/react'
import { useEffect, useRef } from 'react'
import { TabBarItem } from '../TabBarItem'
import { TabBarItems } from '../TabBarItems'
import { StyledTabBar } from './style'

export interface TabBarProps extends ComponentProps<typeof StyledTabBar> {
  /**
   * Indica se está carregando ainda. Útil para quando os itens vierem da API e precisa ter um loader enquanto não carrega
   */
  isLoading?: boolean
}

export const TabBar = ({ isLoading, children, ...props }: TabBarProps) => {
  const tabBarItemsRef = useRef<HTMLDivElement>(null)

  const handleChange = () => {
    if (tabBarItemsRef.current) {
      const tabBarItems = tabBarItemsRef.current.querySelector('[role="tablist"]')
      const activeItem: HTMLElement = tabBarItems?.querySelector(
        '[role="tab"][aria-selected="true"]'
      )!
      const activeBorder: HTMLElement = tabBarItems?.querySelector('.active-border')!
      const activeCircle: HTMLElement = tabBarItems?.querySelector('.active-circle')!

      if (!activeItem) return

      activeBorder.style.width = `${activeItem.offsetWidth}px`
      activeBorder.style.left = `${activeItem.offsetLeft}px`

      activeCircle.style.left = `${
        activeItem.offsetLeft + activeItem.offsetWidth / 2 - activeCircle.offsetWidth / 2
      }px`
    }
  }

  useEffect(() => {
    handleChange()
  }, [props.value])

  return (
    <StyledTabBar {...props} onValueChange={handleChange} ref={tabBarItemsRef}>
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
}
