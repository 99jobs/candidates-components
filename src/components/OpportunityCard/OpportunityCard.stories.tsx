import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { OpportunityCard } from '.'
import { Carousel } from '../Carousel'
import { Chip } from '../Chip'
import { CompanyLogo } from '../CompanyLogo'
import { FavoriteButton } from '../FavoriteButton'
import { Match } from '../Match'
import { OpportunityCardContent } from '../OpportunityCardContent'
import { OpportunityCardHero } from '../OpportunityCardHero'
import { OpportunityExpiresIn } from '../OpportunityExpiresIn'
import { OpportunityOpenUntil } from '../OpportunityOpenUntil'
import { OpportunityTags } from '../OpportunityTags'
import { OpportunityViews } from '../OpportunityViews'
import { Rating } from '../Rating'

export default {
  title: 'Components/Data/OpportunityCard',
  component: OpportunityCard,
} as ComponentMeta<typeof OpportunityCard>

const Template: ComponentStory<typeof OpportunityCard> = (args) => <OpportunityCard {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <OpportunityCard>
      <OpportunityCardHero>
        <Carousel showArrows={false} showStatus={false}>
          <div>
            <img
              src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
              alt="Descrição da Imagem A"
            />
          </div>
          <div>
            <img
              src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
              alt="Descrição da Imagem B"
            />
          </div>
          <div>
            <img
              src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
              alt="Descrição da Imagem C"
            />
          </div>
        </Carousel>

        <CompanyLogo
          src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2649247/regular_f75dbd2bbeb7bd07e7f003fbe1f5920e.png"
          alt="Logotipo da Empresa X"
        />

        <OpportunityExpiresIn>Restam 24h</OpportunityExpiresIn>

        <Match match={86} />

        <Rating rate={4.2} />
      </OpportunityCardHero>

      <OpportunityCardContent>
        <h1>Estágio em Product Design Júnior</h1>

        <FavoriteButton aria-label="Botão Favoritar Oportunidade" />

        <OpportunityTags>
          <Chip label="Remoto" color="outlined" />
          <Chip label="Afirmativa para Mulheres" color="outlined" />
          <Chip label="Estágio" color="level" />
        </OpportunityTags>

        <OpportunityOpenUntil>
          Inscrições abertas até <time dateTime="2022-11-28">28/11/2022</time>
        </OpportunityOpenUntil>

        <OpportunityViews>Mais de 6.456 visualizações desde semana passada</OpportunityViews>
      </OpportunityCardContent>
    </OpportunityCard>
  ),
}
