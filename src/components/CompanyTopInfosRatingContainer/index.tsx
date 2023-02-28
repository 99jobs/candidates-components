import { ComponentProps } from '@stitches/react'
import { StyledCompanyTopInfosRatingContainer } from './style'

export interface CompanyTopInfosRatingContainerProps
  extends ComponentProps<typeof StyledCompanyTopInfosRatingContainer> {}

export const CompanyTopInfosRatingContainer = ({
  ...props
}: CompanyTopInfosRatingContainerProps) => <StyledCompanyTopInfosRatingContainer {...props} />
