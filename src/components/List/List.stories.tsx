/* eslint-disable no-alert */
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { MedalStar } from 'iconsax-react'
import { List } from '.'
import { ListItem } from '../ListItem'

export default {
  title: 'Components/Layout/List',
  component: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <ListItem>Teste</ListItem>
      <ListItem title="Linkedin Top Voices" subtitle="Linkedin | 2021" prefixIcon={<MedalStar />} />
      <ListItem title="Linkedin Top Voices" subtitle="Linkedin | 2021" prefixIcon={<MedalStar />} />
      <ListItem title="Linkedin Top Voices" subtitle="Linkedin | 2021" prefixIcon={<MedalStar />} />
      <ListItem title="Linkedin Top Voices" subtitle="Linkedin | 2021" prefixIcon={<MedalStar />} />
      <ListItem title="Linkedin Top Voices" subtitle="Linkedin | 2021" prefixIcon={<MedalStar />} />
      <ListItem title="Linkedin Top Voices" subtitle="Linkedin | 2021" prefixIcon={<MedalStar />} />
    </>
  ),
}
