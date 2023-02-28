import { ComponentProps } from '@stitches/react'
import { StyledCompanyTopInfos } from './style'

export interface CompanyTopInfosProps extends ComponentProps<typeof StyledCompanyTopInfos> {}

export const CompanyTopInfos = ({ ...props }: CompanyTopInfosProps) => (
  <StyledCompanyTopInfos {...props} />
)
