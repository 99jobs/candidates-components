import { ComponentProps } from '@stitches/react'
import { ReactElement } from 'react'
import {
  Container,
  StyledAvatar,
  StyledAvatarFallback,
  StyledAvatarIcon,
  StyledAvatarImage,
  StyledInputField,
  StyledInputLabel,
} from './style'

export interface AvatarOwnProps extends ComponentProps<typeof StyledAvatar> {
  alt?: string
  src?: string
  fallback?: string
  sufixIcon?: ReactElement
  label?: string
  avatar?: ReactElement
}

export const Avatar = ({
  alt,
  src,
  fallback,
  sufixIcon,
  label,
  avatar,
  ...props
}: AvatarOwnProps) => (
  <Container>
    <StyledAvatar {...props}>
      <StyledAvatarIcon>{avatar}</StyledAvatarIcon>
      <StyledAvatarImage alt={alt} src={src} />
      <StyledAvatarFallback>{fallback}</StyledAvatarFallback>
    </StyledAvatar>
    <StyledInputLabel>
      {sufixIcon}
      <StyledInputField type="file" />
      {label}
    </StyledInputLabel>
  </Container>
)
