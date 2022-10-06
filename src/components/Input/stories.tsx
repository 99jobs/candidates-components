import type { Meta, Story } from '@storybook/react'
import { Input, type InputProps } from '.'

export default {
  title: 'Components/Form/Input',
  component: Input,
} as Meta<InputProps>

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'CPF',
  placeholder: 'Exemplo 123.456.789-10',
  helperText: 'Campo obrigatório',
}
