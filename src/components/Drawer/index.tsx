import { type ComponentProps } from '@stitches/react'
import { useEffect } from 'react'
import { StyledDrawer } from './style'

export interface DrawerProps extends ComponentProps<typeof StyledDrawer> {
  /**
   * Se está visível ou escondido
   */
  visibility?: 'visible' | 'hidden'
}

export const Drawer = ({ visibility = 'hidden', ...props }: DrawerProps) => {
  useEffect(() => {
    if (visibility === 'visible') {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [visibility])

  return <StyledDrawer visibility={visibility} {...props}></StyledDrawer>
}
