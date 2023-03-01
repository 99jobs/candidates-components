import { styled } from '../../configs/stitches.config'
import { StyledCompanyLogo } from '../CompanyLogo/style'

export const StyledCompanyTopInfos = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  [`${StyledCompanyLogo}`]: {
    width: 82,
    height: 82,
    borderRadius: '50%',

    '@sm': {
      width: 112,
      height: 112,
    },
  },
})
