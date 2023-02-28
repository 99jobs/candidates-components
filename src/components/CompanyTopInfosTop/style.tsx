import { styled } from '../../configs/stitches.config'
import { StyledCompanyTopInfosNumber } from '../CompanyTopInfosNumber/style'

export const StyledCompanyTopInfosTop = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  paddingY: 8,
  borderTop: '1px solid $grayLight',
  borderBottom: '1px solid $grayLight',

  [`${StyledCompanyTopInfosNumber}:first-child:not(:only-of-type)`]: {
    borderRight: '1px solid $grayLight',
  },
})
