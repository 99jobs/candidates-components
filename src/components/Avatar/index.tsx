import { ComponentProps } from '@stitches/react'
import { Container, StyledAvatar, StyledFallback, StyledImage } from './style'

export interface AvatarProps extends ComponentProps<typeof StyledAvatar> {
  /* Iniciais do user */
  label?: string

  /* link da imagem */
  src?: string

  /* alt */
  alt?: string
}

export const Avatar = ({ label, src, alt, ...props }: AvatarProps) => (
  <Container>
    <StyledAvatar {...props}>
      <StyledImage src={src} alt={alt} />
      <StyledFallback>{label}</StyledFallback>
    </StyledAvatar>
  </Container>
)
