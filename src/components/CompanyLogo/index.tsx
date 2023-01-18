import { type ComponentProps } from '@stitches/react'
import { StyledCompanyLogo } from './style'

export interface CompanyLogoProps extends ComponentProps<typeof StyledCompanyLogo> {}

export const CompanyLogo = ({ ...props }: CompanyLogoProps) => <StyledCompanyLogo {...props} />
