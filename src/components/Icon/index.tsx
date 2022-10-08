import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { type ComponentProps, type ReactNode } from 'react'

export interface IconProps extends ComponentProps<typeof AccessibleIcon.Root> {
  /**
   * The icon to be rendered
   */
  children: ReactNode
}

export const Icon = ({ label, children }: IconProps) => (
  <AccessibleIcon.Root label={label}>{children}</AccessibleIcon.Root>
)
