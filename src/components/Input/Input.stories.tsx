import { Meta, Story } from '@storybook/react'
import { Input, InputProps } from '.'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<InputProps>

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'CPF',
  placeholder: 'Exemplo 123.456.789-10',
  helperText: 'Campo obrigatório',
}
