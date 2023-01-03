/* eslint-disable no-alert */
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCircle } from 'iconsax-react'
import { Header } from '.'
import { Avatar } from '../Avatar'
import { Button } from '../Button'

export default {
  title: 'Components/Layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Authenticated = Template.bind({})
Authenticated.args = {
  children: (
    <>
      <div>
        <h2>
          Olá, <strong>Mark!</strong>
        </h2>
      </div>

      <Avatar
        src={`https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1448830269/gzcifut4c2xah95x0ewd.jpg`}
        fallback={'MZ'}
        alt="Foto do usuário"
      />
    </>
  ),
}

export const Unauthenticated = Template.bind({})
Unauthenticated.args = {
  children: (
    <>
      <div>
        <h2>
          Olá, <strong>Visitante</strong>
        </h2>
        <p>A sua oportunidade está aqui</p>
      </div>

      <Button color="ghost" label="Acessar" prefixIcon={<ProfileCircle />} css={{ paddingX: 8 }} />
    </>
  ),
}
