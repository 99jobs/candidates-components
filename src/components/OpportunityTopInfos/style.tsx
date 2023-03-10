import { styled } from '../../configs/stitches.config'
import { StyledCompanyLogo } from '../CompanyLogo/style'
import { StyledOpportunityTags } from '../OpportunityTags/style'
import { StyledRating } from '../Rating/style'

export const StyledOpportunityTopInfos = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 12,
  position: 'relative',

  h1: {
    maxWidth: 'calc(100% - 82px - 60px)',
  },

  [`${StyledCompanyLogo}`]: {
    width: 82,
    height: 82,
  },

  [`${StyledRating}`]: {
    color: '$gray',
    fontSize: '$h2',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  [`${StyledOpportunityTags}`]: {
    width: '100%',
  },
})

export const StyledOpportunityTopInfosContent = styled('div', {})
