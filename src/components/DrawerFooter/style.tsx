import { styled } from '../../configs/stitches.config'

export const StyledDrawerFooter = styled('div', {
  paddingY: 43,
  background: '$bluePrimary',
  marginLeft: -20,
  marginRight: -20,
  display: 'flex',
  flexDirection: 'column',

  '.drawer-footer-alert': {
    borderRadius: '$xlg',
    background: '$gradientBlueLightDark',
    paddingY: 18,
    paddingX: 28,
    marginX: 'auto',
    marginBottom: 30,

    '& > p': {
      fontSize: '$small',
      fontWeight: 400,
      color: '$onBluePrimary',
      marginBottom: 14,
    },

    ul: {
      li: {
        listStyle: 'none',
        color: '$onBluePrimary',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 6,

        '&:not(:last-of-type)': {
          marginBottom: 6,
        },

        span: {
          flexGrow: 1,
          fontSize: '$small',
          fontWeight: 400,
        },

        strong: {
          display: 'block',
        },
      },
    },
  },

  '.drawer-footer-social-links': {
    marginX: 'auto',
    marginBottom: 48,

    ul: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,

      li: {
        listStyle: 'none',

        a: {
          width: 34,
          height: 34,
          background: '$gradientBlueLightDark',
          borderRadius: '$md',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          color: '#ffffff',
        },
      },
    },
  },

  '& > svg': {
    width: 143,
    marginBottom: 16,
    marginX: 'auto',
  },

  'p.drawer-footer-developed-by': {
    fontSize: '$small',
    fontWeight: 400,
    color: '$onBluePrimary',
    textAlign: 'center',

    svg: {
      color: '$redSystem',
      verticalAlign: 'middle',
    },

    span: {
      color: '$redSystem',
    },
  },
})
