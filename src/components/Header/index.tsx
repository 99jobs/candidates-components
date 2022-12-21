import { ProfileCircle } from 'iconsax-react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { StyledHeader } from './style'

export interface HeaderProps {
  /**
   * Está logado?
   */
  isAuth: boolean
  /**
   * Infos do user, como nome e url do avatar
   */
  user?: {
    name: string
    avatarUrl: string
  }
}

export const Header = ({ isAuth = false, user, ...props }: HeaderProps) => {
  const firstName = user?.name.split(' ')[0]
  const userInitials = user?.name.substring(0, 2)

  return (
    <StyledHeader {...props}>
      {isAuth ? (
        <>
          <div>
            <h1>
              Olá, <strong>{firstName}</strong>
            </h1>
          </div>

          <Avatar
            src={`${user?.avatarUrl ?? ''}`}
            fallback={userInitials ?? ''}
            alt="Foto do usuário"
          />
        </>
      ) : (
        <>
          <div>
            <h1>
              Olá, <strong>Visitante</strong>
            </h1>
            <h2>A sua oportunidade está aqui</h2>
          </div>

          <Button color="ghost" label="Acessar" prefixIcon={<ProfileCircle />} />
        </>
      )}
    </StyledHeader>
  )
}
