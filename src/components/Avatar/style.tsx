import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '../../configs/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  backgroundColor: '$bluPrimary',
})

export const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '$bluPrimary',
})

// Foto do User
export const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

// Iniciais do User
export const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$bluPrimary',
  color: 'BlueViolet',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})
