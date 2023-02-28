import { ComponentProps } from '@stitches/react'
import { StyledCompanyTopInfosSocialMediaButtons } from './style'

export interface CompanyTopInfosSocialMediaButtonsProps
  extends ComponentProps<typeof StyledCompanyTopInfosSocialMediaButtons> {}

export const CompanyTopInfosSocialMediaButtons = ({
  ...props
}: CompanyTopInfosSocialMediaButtonsProps) => <StyledCompanyTopInfosSocialMediaButtons {...props} />
