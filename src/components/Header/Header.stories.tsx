/* eslint-disable no-alert */
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Header } from '.'

export default {
  title: 'Components/Layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Authenticated = Template.bind({})
Authenticated.args = {
  isAuth: true,
  user: {
    name: 'João Paulo Hildebrand Landino',
    avatarUrl:
      'https://lh3.googleusercontent.com/ogw/AOh-ky0MfVFy3eZcfmEI61B76-Rb-lKciKHU4wOrma3bIlQ=s64-c-mo',
  },
}

export const Unauthenticated = Template.bind({})
Unauthenticated.args = {
  isAuth: false,
}
