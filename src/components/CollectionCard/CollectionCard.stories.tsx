import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CollectionCard } from '.'
import { CollectionCardContent } from '../CollectionCardContent'
import { CollectionCardHero } from '../CollectionCardHero'
import { CompanyLogo } from '../CompanyLogo'
import { FavoriteButton } from '../FavoriteButton'

export default {
  title: 'Components/Data/CollectionCard',
  component: CollectionCard,
} as ComponentMeta<typeof CollectionCard>

const Template: ComponentStory<typeof CollectionCard> = (args) => <CollectionCard {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <CollectionCardHero>
        <img
          src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
          alt="Descrição da Imagem A"
        />

        <CompanyLogo
          src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2649247/regular_f75dbd2bbeb7bd07e7f003fbe1f5920e.png"
          alt="Logotipo da Empresa X"
        />
      </CollectionCardHero>

      <CollectionCardContent>
        <h1>6 Oportunidades</h1>
        <p>Itaú BBA</p>

        <FavoriteButton aria-label="Botão Favoritar Coleção" />
      </CollectionCardContent>
    </>
  ),
}
