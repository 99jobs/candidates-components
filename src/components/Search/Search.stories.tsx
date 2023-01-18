import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Search } from '.'
import { Button } from '../Button'
import { CollectionCard } from '../CollectionCard'
import { MatchAvatar } from '../MatchAvatar'
import { MatchCard } from '../MatchCard'

export default {
  title: 'Components/Form/Search',
  component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => (
  <div>
    <Search {...args} />

    {[...Array(10)].map((_, index) => (
      <p key={index}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum
      </p>
    ))}
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <h2>Sugestões pra você</h2>

      <div style={{ marginTop: 8, marginBottom: 24, display: 'flex', gap: 8, overflow: 'auto' }}>
        <CollectionCard>
          <img src="https://f55f12fe8ec0186f.cdn.gocache.net/assets/2022/collection-estagio-9a86d0aec4dcc1382dcfafc88b2a6a0b0618aa24f8ab2dfbdd3b93d9a75e009a.png" />
          Seu próximo estágio tá on!
        </CollectionCard>
        <CollectionCard>
          <img src="https://f55f12fe8ec0186f.cdn.gocache.net/assets/2022/collection-trainee-5012b12a14df305e653f66826062b87293dcd7d68307f24120d9882767ee1774.png" />
          Trainee futuro líder
        </CollectionCard>
      </div>

      <MatchCard>
        <h1>99 match</h1>
        <p>Descubra seu perfil e tenha acesso a vagas de acordo</p>

        <div
          style={{
            marginBottom: 16,
            alignSelf: 'stretch',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <MatchAvatar>
            <img src="https://99prod.s3.amazonaws.com/uploads/b6cb741d-a754-42d7-9d0e-62d133e906b1/4.png" />
            Free Spirit
          </MatchAvatar>

          <MatchAvatar>
            <img src="https://99prod.s3.amazonaws.com/uploads/9f812100-ea5f-49cf-afd2-e69160b6223b/3.png" />
            Social Impact
          </MatchAvatar>
        </div>

        <Button color="outline" label="Quero fazer meu match" />
      </MatchCard>
    </>
  ),
}
