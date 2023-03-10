import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { OpportunityTopInfos } from '.'
import { Chip } from '../Chip'
import { CompanyLogo } from '../CompanyLogo'
import { OpportunityTags } from '../OpportunityTags'
import { Rating } from '../Rating'

export default {
  title: 'Components/Data/OpportunityTopInfos',
  component: OpportunityTopInfos,
} as ComponentMeta<typeof OpportunityTopInfos>

const Template: ComponentStory<typeof OpportunityTopInfos> = (args) => (
  <OpportunityTopInfos {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <CompanyLogo
        src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2455745/regular_6cb89e17c1965121b464829af22f7a89.jpeg"
        alt="Logotipo da Empresa X"
      />

      <h1>Estágio em Product Design</h1>

      <Rating rate={4.8} />

      <OpportunityTags>
        <Chip label="Remoto" color="outlined" />
        <Chip label="Afirmativa para Mulheres" color="outlined" />
        <Chip label="Estágio" color="level" />
      </OpportunityTags>
    </>
  ),
}
