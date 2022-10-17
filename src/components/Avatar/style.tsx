import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '../../configs/stitches.config'

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
  backgroundColor: '$gradientBluePurple',
})

export const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: 'uppercase',
})

export const AvatarNestedItem = styled('div', {
  boxShadow: '0 0 0 2px $gradientBluePurple',
  borderRadius: '50%',
  backgroundColor: '$gradientBluePurple' /* Cor não aparece */,
})
