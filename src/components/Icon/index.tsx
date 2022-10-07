import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { ComponentProps } from 'react'

export interface IconProps extends Required<ComponentProps<typeof AccessibleIcon.Root>> {}

export const Icon = ({ label, children }: IconProps) => (
  <AccessibleIcon.Root label={label}>{children}</AccessibleIcon.Root>
)
