import { ComponentProps } from '@stitches/react'
import { StyledCompanyTopInfosBottom } from './style'

export interface CompanyTopInfosBottomProps
  extends ComponentProps<typeof StyledCompanyTopInfosBottom> {}

export const CompanyTopInfosBottom = ({ ...props }: CompanyTopInfosBottomProps) => (
  <StyledCompanyTopInfosBottom {...props} />
)
