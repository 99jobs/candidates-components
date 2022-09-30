import { Meta, Story } from '@storybook/react'
import { MdPersonOutline } from 'react-icons/md'
import { Button, ButtonProps } from './index'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    prefixIcon: { control: false },
    sufixIcon: { control: false },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const DefaultWithPrefixIcon = Template.bind({})
DefaultWithPrefixIcon.args = {
  label: 'Button',
  prefixIcon: <MdPersonOutline />,
}

export const DefaultWithSufixIcon = Template.bind({})
DefaultWithSufixIcon.args = {
  label: 'Button',
  sufixIcon: <MdPersonOutline />,
}

export const DefaultWithoutLabel = Template.bind({})
DefaultWithoutLabel.args = {
  label: 'Botão sem label',
  sufixIcon: <MdPersonOutline />,
  hideLabel: true,
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Button',
  color: 'outline',
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
