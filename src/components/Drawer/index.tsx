import { type ComponentProps } from '@stitches/react'
import { StyledDrawer } from './style'

export interface DrawerProps extends ComponentProps<typeof StyledDrawer> {
  /**
   * Se está visível ou escondido
   */
  visibility?: 'visible' | 'hidden'
}

export const Drawer = ({ visibility = 'hidden', ...props }: DrawerProps) => (
  <StyledDrawer visibility={visibility} {...props}></StyledDrawer>
)
