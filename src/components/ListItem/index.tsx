import { type ComponentProps } from '@stitches/react'
import { type ReactNode } from 'react'
import { StyledListItem, StyledListItemSubTitle, StyledListItemTitle } from './style'

export interface ListItemProps extends ComponentProps<typeof StyledListItem> {
  /**
   * Ícone da esquerda
   */
  prefixIcon?: ReactNode

  /**
   * Texto principal
   */
  title?: string

  /**
   * Texto secundário
   */
  subtitle?: string
}

export const ListItem = ({ prefixIcon, title, subtitle, children, ...props }: ListItemProps) => (
  <StyledListItem {...props}>
    {prefixIcon}
    <div>
      {title && <StyledListItemTitle>{title}</StyledListItemTitle>}
      {subtitle && <StyledListItemSubTitle>{subtitle}</StyledListItemSubTitle>}
      {children}
    </div>
  </StyledListItem>
)
