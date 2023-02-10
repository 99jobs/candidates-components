import * as PrimitivePortal from '@radix-ui/react-portal'
import { keyframes, styled } from '../../configs/stitches.config'

const showSearchFullScreen = keyframes({
  '0%': {
    top: '100%',
  },
  '100%': {
    top: 0,
  },
})

const hideSearchFullScreen = keyframes({
  '0%': {
    top: 0,
  },
  '100%': {
    top: '100%',
  },
})

export const StyledSearchContainer = styled('div', {})

export const StyledSearchGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  boxShadow: '$md',
  borderRadius: '$xxlg',
  paddingX: 6,
  background: '#ffffff',
})

export const StyledCloseSearch = styled('button', {
  width: 34,
  height: 34,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$grayDark',
  background: 'transparent',
  cursor: 'pointer',
})

export const StyledSearchPrefixIcon = styled('span', {
  width: 34,
  height: 34,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray',
  background: 'transparent',
})

export const StyledSearchInput = styled('input', {
  height: 44,
  outline: 'none',
  flexGrow: 1,
  color: '$gray',
  background: 'transparent',
  '-webkit-appearance': 'textfield;',

  '&::placeholder': {
    fontSize: 12,
    fontWeight: 400,
    color: '$gray',
  },
})

export const StyledSearchSufixIcon = styled('span', {
  width: 34,
  height: 34,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $grayDark',
  color: '$grayDark',
  background: 'transparent',
  borderRadius: '50%',
  transition: 'backgroundColor 0.2s ease-in-out',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$grayDark',
    color: '$onGrayDark',
  },
})

export const StyledSearchFullScreen = styled(PrimitivePortal.Root, {
  position: 'fixed',
  left: 0,
  right: 0,
  top: '100%',
  bottom: 0,
  background: '#ffffff',
  zIndex: 100,
  maxHeight: '100vh',
  overflow: 'auto',

  '&[data-state="open"]': {
    animation: `${showSearchFullScreen} 0.5s ease-in-out forwards`,
  },
  '&[data-state="closing"]': {
    animation: `${hideSearchFullScreen} 0.5s ease-in-out forwards`,
  },
})

export const StyledSearchFullScreenHeader = styled('div', {
  padding: '26px 19px',
  background: '#FFFFFF',
  boxShadow: '$md',
})

export const StyledSearchFullScreenContent = styled('div', {
  padding: '16px 24px',
})
