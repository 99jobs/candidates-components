/* eslint-disable no-console */
import { type ComponentProps } from '@stitches/react'
import { Camera } from 'iconsax-react'
import { type ChangeEvent } from 'react'
import {
  Container,
  StyledAvatar,
  StyledAvatarFallback,
  StyledAvatarImage,
  StyledInputField,
  StyledInputLabel,
} from './style'

export interface AvatarOwnProps extends ComponentProps<typeof StyledAvatar> {
  /**
   * texto alternativo da imagem
   */
  alt: string

  /**
   * Caminho da imagem
   */
  src?: string

  /**
   * Iniciais do user
   */
  fallback: string

  /**
   * Caso true, o input vem com uma tag 'Editar'
   */
  isInput?: boolean

  /**
   * O tamanho do avatar. Default 40.
   */
  size?: number
}

export const Avatar = ({
  alt,
  src,
  fallback,
  isInput = false,
  size = 40,
  onChange,
  ...props
}: AvatarOwnProps) => {
  let fallback2Letters = fallback
  if (fallback2Letters?.length > 2) {
    fallback2Letters = fallback2Letters.substring(0, 2)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files, value } = e.target

    const allowedFormats = /(.jpg|.jpeg|.png)$/i
    const maximumSize = 2100000

    if (!allowedFormats.exec(value)) {
      console.log('Formato incorreto')
    } else if (files && files[0].size > maximumSize) {
      console.log('Tamanho incorreto')
    } else {
      console.log('OK')
    }
  }

  return (
    <Container>
      <StyledAvatar style={{ width: size, height: size }} {...props}>
        <StyledAvatarImage alt={alt} src={src} />
        <StyledAvatarFallback style={{ fontSize: size / 2.3 }}>
          {fallback2Letters}
        </StyledAvatarFallback>
      </StyledAvatar>
      {isInput && (
        <StyledInputLabel>
          <Camera />
          <StyledInputField type="file" id="arquivo" onChange={handleChange} />
          Editar
        </StyledInputLabel>
      )}
    </Container>
  )
}
