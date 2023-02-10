/* eslint-disable no-alert */
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { MatchCard } from '.'
import { Button } from '../Button'
import { MatchAvatar } from '../MatchAvatar'

export default {
  title: 'Components/Data/MatchCard',
  component: MatchCard,
} as ComponentMeta<typeof MatchCard>

const Template: ComponentStory<typeof MatchCard> = (args) => <MatchCard {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
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
          <img
            src="https://99prod.s3.amazonaws.com/uploads/b6cb741d-a754-42d7-9d0e-62d133e906b1/4.png"
            alt="Ícone Free Spirit"
          />
          Free Spirit
        </MatchAvatar>

        <MatchAvatar>
          <img
            src="https://99prod.s3.amazonaws.com/uploads/9f812100-ea5f-49cf-afd2-e69160b6223b/3.png"
            alt="Ícone Social Impact"
          />
          Social Impact
        </MatchAvatar>
      </div>

      <Button color="outline" label="Quero fazer meu match" />
    </>
  ),
}
