/* eslint-disable no-console */
import { ComponentProps } from '@stitches/react'
import { ReactElement, type ChangeEvent } from 'react'
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
  onChange,
  ...props
}: AvatarOwnProps) => {
  // const [userAvatar, setUserAvatar] = useState('')

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
        <StyledAvatarIcon>{avatar}</StyledAvatarIcon>
        <StyledAvatarImage alt={alt} src={src} />
        <StyledAvatarFallback>{fallback}</StyledAvatarFallback>
      </StyledAvatar>
      <StyledInputLabel>
        {sufixIcon}
        <StyledInputField type="file" id="arquivo" onChange={handleChange} />
        {label}
      </StyledInputLabel>
    </Container>
  )
}
