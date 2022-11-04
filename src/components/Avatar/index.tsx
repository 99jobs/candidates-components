/* eslint-disable no-console */
import { type ComponentProps } from '@stitches/react'
import { type ChangeEvent } from 'react'
import { MdOutlineCameraAlt } from 'react-icons/md'
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
   * Caso true, o input vem com o texto 'Editar'
   */
  label?: boolean
}

export const Avatar = ({
  alt,
  src,
  fallback,
  label = true,
  onChange,
  ...props
}: AvatarOwnProps) => {
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
      <StyledAvatar {...props}>
        <StyledAvatarImage alt={alt} src={src} />
        <StyledAvatarFallback>{fallback}</StyledAvatarFallback>
      </StyledAvatar>
      <StyledInputLabel>
        <MdOutlineCameraAlt />
        <StyledInputField type="file" id="arquivo" onChange={handleChange} />
        {label ? 'Editar' : ''}
      </StyledInputLabel>
    </Container>
  )
}
