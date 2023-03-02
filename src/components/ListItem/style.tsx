import { styled } from '../../configs/stitches.config'

export const StyledListItemTitle = styled('span', {
  fontSize: '$h3',
  fontWeight: 700,
  color: '$gray',
})

export const StyledListItemSubTitle = styled('span', {
  fontSize: '$small',
  fontWeight: 400,
  color: '$gray',
})

export const StyledListItem = styled('li', {
  display: 'flex',
  gap: 8,

  '& > svg': {},

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
})
