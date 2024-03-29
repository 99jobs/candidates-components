import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '../../configs/stitches.config'

export const Container = styled('div', {
  width: 'fit-content',
  display: 'flex',
  zIndex: 2,
  position: 'relative',
})

export const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
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
  lineHeight: 1,
  fontWeight: 500,
  backgroundImage: 'url(assets/icons/user.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '70%',
  backgroundPosition: ' bottom center',
})

export const StyledInputLabel = styled('label', {
  position: 'absolute',
  top: '100%',
  left: '50%',
  fontWeight: 600,
  fontSize: '$small',
  color: '$gray',
  backgroundColor: '$backgroundGrayLight',
  padding: '10px 12px',
  borderRadius: 50,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const StyledInputField = styled('input', {
  display: 'none',
})
