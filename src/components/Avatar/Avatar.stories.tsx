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
}
