import { Story } from '@storybook/react'
import { MdAccountCircle } from 'react-icons/md'
import { Button, ButtonProps } from './index'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button teste 2',
}

export const DefaultWithPrefixIcon = Template.bind({})
DefaultWithPrefixIcon.args = {
  label: 'Button',
  prefixIcon: <MdAccountCircle />,
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
