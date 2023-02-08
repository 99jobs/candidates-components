import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { SubscriptionCard } from '.'
import { Chip } from '../Chip'
import { SubscriptionCardContent } from '../SubscriptionCardContent'
import { SubscriptionCardLogo } from '../SubscriptionCardLogo'
import { SubscriptionCardOpenUntil } from '../SubscriptionCardOpenUntil'
import { SubscriptionCardTags } from '../SubscriptionCardTags'

export default {
  title: 'Components/Data/SubscriptionCard',
  component: SubscriptionCard,
} as ComponentMeta<typeof SubscriptionCard>

const Template: ComponentStory<typeof SubscriptionCard> = (args) => <SubscriptionCard {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <SubscriptionCardContent>
        <h1>Est. em Product Designer</h1>

        <SubscriptionCardTags>
          <Chip label="Remoto" color="outlined" />
          <Chip label="Estágio" color="level" />
          <Chip label="Afirmativa para Mulheres" color="outlined" />
        </SubscriptionCardTags>

        <SubscriptionCardOpenUntil>
          Inscrições abertas até <time dateTime="2022-11-28">28/11/2022</time>
        </SubscriptionCardOpenUntil>
      </SubscriptionCardContent>

      <SubscriptionCardLogo src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2649247/regular_f75dbd2bbeb7bd07e7f003fbe1f5920e.png" />
    </>
  ),
}
