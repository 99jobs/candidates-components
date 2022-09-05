import { ComponentStory } from '@storybook/react'
import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Button',
  color: 'red',
}
