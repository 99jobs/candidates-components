import * as PrimitivePortal from '@radix-ui/react-portal'
import { keyframes, styled } from '../../configs/stitches.config'

const showSearchFullScreen = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

const showSearchGroup = keyframes({
  '0%': {
    position: 'fixed',
    left: 19,
    right: 19,
    top: -100,
    bottom: 'auto',
    zIndex: 101,
  },
  '100%': {
    position: 'fixed',
    left: 19,
    right: 19,
    top: 26,
    bottom: 'auto',
    zIndex: 101,
  },
})

export const StyledSearchContainer = styled('div', {})

export const StyledSearchGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0px 1px 5px rgba(35, 34, 34, 0.15)',
  borderRadius: 32,
  paddingX: 6,
  background: '#ffffff',

  '&[data-is-open="true"]': {
    animation: `${showSearchGroup} 0.3s ease-in-out forwards`,
  },
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

export const StyledSearchPrefixIcon = styled('button', {
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

  '&::placeholder': {
    fontSize: 12,
    fontWeight: 400,
    color: '$gray',
  },
})

export const StyledSearchSufixIcon = styled('button', {
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
  top: 0,
  bottom: 0,
  opacity: 0,
  background: '#ffffff',
  zIndex: 100,
  animation: `${showSearchFullScreen} 0.3s ease-in-out forwards`,
})

export const StyledAreaSearchGroup = styled('div', {
  height: 96,
  background: '#FFFFFF',
  boxShadow: '0px 1px 5px rgba(35, 34, 34, 0.15)',
})

export const StyledSearchFullScreenInner = styled('div', {
  padding: '16px 24px',

  h3: {
    fontWeight: 700,
    color: '$grayDark',
  },
})
