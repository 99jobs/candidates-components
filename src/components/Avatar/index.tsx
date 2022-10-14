import { ComponentProps } from '@stitches/react'
import React from 'react'
import { StyledAvatar, StyledAvatarFallback, StyledAvatarImage } from './style'

export interface AvatarOwnProps extends ComponentProps<typeof StyledAvatar> {
  alt?: string
  src?: string
  fallback?: React.ReactNode
}

export const Avatar = ({ alt, src, fallback, size, variant, shape, ...props }: AvatarOwnProps) => (
  <StyledAvatar {...props} size={size} variant={variant} shape={shape}>
    <StyledAvatarImage alt={alt} src={src} />
    <StyledAvatarFallback size={size}>{fallback}</StyledAvatarFallback>
  </StyledAvatar>
)
