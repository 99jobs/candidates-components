import { ComponentProps } from '@stitches/react'
import { StyledCompanyTopInfosContent } from './style'

export interface CompanyTopInfosContentProps
  extends ComponentProps<typeof StyledCompanyTopInfosContent> {}

export const CompanyTopInfosContent = ({ ...props }: CompanyTopInfosContentProps) => (
  <StyledCompanyTopInfosContent {...props} />
)
