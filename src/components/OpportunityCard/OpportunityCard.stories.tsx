import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { OpportunityCard } from '.'
import { Carousel } from '../Carousel'
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
      <Carousel>
        <div>
          <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg" />
        </div>
        <div>
          <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg" />
        </div>
        <div>
          <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg" />
        </div>
      </Carousel>

      <OpportunityCardHero>
        <CompanyLogo src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2649247/regular_f75dbd2bbeb7bd07e7f003fbe1f5920e.png" />

        <OpportunityExpiresIn />
        <Match />
        <Rating />
      </OpportunityCardHero>

      <OpportunityCardContent>
        <h1>Estágio em Product Design Júnior</h1>

        <FavoriteButton />

        <OpportunityTags />

        <OpportunityOpenUntil />

        <OpportunityViews />
      </OpportunityCardContent>
    </OpportunityCard>
  ),
}
