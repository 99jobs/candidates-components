import { ComponentProps } from '@stitches/react'
import { AvatarNestedItem, StyledAvatar, StyledAvatarFallback, StyledAvatarImage } from './style'

export interface AvatarOwnProps extends ComponentProps<typeof StyledAvatar> {
  alt?: string
  src?: string
  fallback?: string
}

export const Avatar = ({ alt, src, fallback, ...props }: AvatarOwnProps) => (
  <AvatarNestedItem>
    <StyledAvatar {...props}>
      <StyledAvatarImage alt={alt} src={src} />
      <StyledAvatarFallback>{fallback}</StyledAvatarFallback>
    </StyledAvatar>
  </AvatarNestedItem>
)
