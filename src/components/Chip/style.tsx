import { styled } from '../../configs/stitches.config'

export const StyledChipContainer = styled('span', {
  borderRadius: '$md',
  paddingX: 8,
  paddingY: 4,
  fontWeight: 600,
  fontSize: 10,
  border: '1px solid transparent',

  variants: {
    color: {
      outlined: {
        color: '$grayDark',
        borderColor: '$grayDark',
      },
      urgent: {
        color: '$onRedSystemDark',
        borderColor: '$redSystemDark',
      },
      level: {
        color: '$onGraySoft',
        borderColor: '$graySoft',
        backgroundColor: '$graySoft',
      },
    },
  },
})
