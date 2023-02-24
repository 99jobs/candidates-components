import { type ComponentProps } from '@stitches/react'
import { StyledCompanyCard } from './style'

export interface CompanyCardProps extends ComponentProps<typeof StyledCompanyCard> {
  /**
   * Indica o tamanho do card
   */
  size: 'sm' | 'md'
}

export const CompanyCard = ({ size = 'sm', ...props }: CompanyCardProps) => (
  <StyledCompanyCard size={size} {...props}></StyledCompanyCard>
)
