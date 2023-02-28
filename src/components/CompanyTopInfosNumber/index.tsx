import { ComponentProps } from '@stitches/react'
import { StyledCompanyTopInfosNumber } from './style'

export interface CompanyTopInfosNumberProps
  extends ComponentProps<typeof StyledCompanyTopInfosNumber> {}

export const CompanyTopInfosNumber = ({ ...props }: CompanyTopInfosNumberProps) => (
  <StyledCompanyTopInfosNumber {...props} />
)
