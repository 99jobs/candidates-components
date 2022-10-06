import type { Story } from '@storybook/react'
import { Icon } from '.'

export default {
  title: 'Components/Icon',
  component: Icon,
}

const Template: Story = (args) => <Icon {...args} />

export const Default = Template.bind({})
