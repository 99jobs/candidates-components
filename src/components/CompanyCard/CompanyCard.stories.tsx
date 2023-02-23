import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CompanyCard } from '.'
import { CompanyCardHighlightedTag } from '../CompanyCardHighlightedTag'
import { FavoriteButton } from '../FavoriteButton'

export default {
  title: 'Components/Data/CompanyCard',
  component: CompanyCard,
} as ComponentMeta<typeof CompanyCard>

const Template: ComponentStory<typeof CompanyCard> = (args) => <CompanyCard {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'sm',
  children: (
    <>
      <img
        src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2455745/regular_6cb89e17c1965121b464829af22f7a89.jpeg"
        alt="Logotipo da empresa X"
      />
    </>
  ),
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  children: (
    <>
      <FavoriteButton isFilled aria-label="Botão de Favoritar Empresa" />
      <CompanyCardHighlightedTag />
      <img
        src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2455745/regular_6cb89e17c1965121b464829af22f7a89.jpeg"
        alt="Logotipo da empresa X"
      />
    </>
  ),
}
