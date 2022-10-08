import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Input } from '.'

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'CPF',
  placeholder: 'Exemplo 123.456.789-10',
  helperText: 'Campo obrigatório',
}
