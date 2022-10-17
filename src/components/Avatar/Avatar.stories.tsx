import { Meta, Story } from '@storybook/react'
import { Avatar, AvatarOwnProps } from './index'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarOwnProps> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  fallback: 'CA',
  // src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
}

export const Second = Template.bind({})
Second.args = {
  src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
  alt: 'girl',
}
