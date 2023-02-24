import { styled } from '../../configs/stitches.config'

export const StyledCompanyCardHighlightedTag = styled('div', {
  borderRadius: '$md',
  borderBottomLeftRadius: 0,
  backgroundColor: '$purpleSystem',
  color: '$onPurpleSystem',
  fontSize: '$small',
  fontWeight: 600,
  paddingX: 8,
  paddingY: 4,
  position: 'relative',

  '&:before': {
    content: '',
    display: 'block',
    width: 10,
    height: 10,
    backgroundColor: '$purpleSystemDark',
    position: 'absolute',
    top: 21,
    left: 0,
    clipPath: 'polygon(0 0, 100% 100%, 100% 0)',
    zIndex: -1,
  },
})
