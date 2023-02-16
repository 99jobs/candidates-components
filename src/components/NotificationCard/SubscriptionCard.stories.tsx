import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotificationCard } from '.'
import { NotificationCardContent } from '../NotificationCardContent'
import { NotificationCardLogo } from '../NotificationCardLogo'

export default {
  title: 'Components/Data/NotificationCard',
  component: NotificationCard,
} as ComponentMeta<typeof NotificationCard>

const Template: ComponentStory<typeof NotificationCard> = (args) => <NotificationCard {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <NotificationCardLogo
        src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2649247/regular_f75dbd2bbeb7bd07e7f003fbe1f5920e.png"
        alt="Logotipo empresa Xpto"
      />
      <NotificationCardContent>
        <p>
          Olá, Alícia
          <br />
          Ficamos muito felizes que você se candidatou porém nesse momento resolvemos não seguir
          adiante com a sua candidatura. Fique atenta para novas oportunidades!
        </p>
      </NotificationCardContent>
    </>
  ),
}
