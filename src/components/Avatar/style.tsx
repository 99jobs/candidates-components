import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { styled } from '../../configs/stitches.config'

export const Container = styled('div', {
  // backgroundColor: '$grayDark',
  width: 'fit-content',
  display: 'flex',
  zIndex: 2,
})

export const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 107,
  height: 107,
  borderRadius: '100%',
  overflowX: 'hidden',
})

export const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: 'uppercase',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$bluePrimaryLight',
  color: '$onPurpleSystemLight',
  fontSize: 24,
  lineHeight: 1,
  fontWeight: 500,
  backgroundImage: 'url(assets/icons/user.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '70%',
  backgroundPosition: ' bottom center',
})

export const StyledAvatarIcon = styled('div', {
  position: 'absolute',
  opacity: 0.16,
  marginTop: 25,
})

export const StyledInputLabel = styled('label', {
  position: 'absolute',
  top: 70,
  left: 40,
  fontWeight: 600,
  fontSize: '$small',
  color: '$gray',
  margin: '28px 34px',
  backgroundColor: '$backgroundGrayLight',
  padding: '10px 12px',
  borderRadius: 50,
  display: 'flex',
  alignItems: 'center',
  gap: '$sm2',
})

export const StyledInputField = styled('input', {
  display: 'none',
})
