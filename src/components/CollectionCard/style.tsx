import { styled } from '../../configs/stitches.config'

export const StyledCollectionCard = styled('a', {
  textDecoration: 'none',
  fontSize: '$body',
  fontWeight: 700,
  color: '$bluePrimary',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  paddingLeft: 8,

  img: {
    width: 155,
    height: 112,
    borderRadius: '$md',
    objectFit: 'cover',
    marginLeft: -8,
  },
})
