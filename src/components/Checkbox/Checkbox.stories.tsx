import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Checkbox } from '.'

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Brasil',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Brasil',
  disabled: true,
}
