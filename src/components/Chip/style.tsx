import { styled } from '../../configs/stitches.config'

export const StyledChipContainer = styled('span', {
  borderRadius: '$lg',
  paddingX: 8,
  paddingY: 4,
  fontWeight: 600,
  fontSize: 10,

  variants: {
    color: {
      actingMode: {
        backgroundColor: '$greenSystem',
        color: '$onGreenSystem',
      },
      pcd: {
        backgroundColor: '$yellowSystemDark',
        color: '$onYellowSystemDark',
      },
      highlight: {
        backgroundColor: '$purpleSystemDark',
        color: '$onPurpleSystemDark',
      },
      urgent: {
        backgroundColor: '$redSystemDark',
        color: '$onRedSystemDark',
      },
      level: {
        backgroundColor: '$graySoft',
        color: '$onGraySoft',
      },
    },
  },
})
