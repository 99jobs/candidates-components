import { ComponentProps } from '@stitches/react'
import { StyledCompanyTopInfosTop } from './style'

export interface CompanyTopInfosTopProps extends ComponentProps<typeof StyledCompanyTopInfosTop> {}

export const CompanyTopInfosTop = ({ ...props }: CompanyTopInfosTopProps) => (
  <StyledCompanyTopInfosTop {...props} />
)
