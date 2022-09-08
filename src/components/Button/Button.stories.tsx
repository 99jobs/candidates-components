import { ComponentStory } from '@storybook/react'
import Button from './index'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Button',
  color: 'outlined',
}

export const Ghost = Template.bind({})
Ghost.args = {
  label: 'Button',
  color: 'ghost',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',
  disabled: true,
}
