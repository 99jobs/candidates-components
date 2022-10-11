import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { MdOutlineVisibility, MdPerson, MdVisibility } from 'react-icons/md'
import { Input } from '.'
import { Button } from '../Button'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    sufixIconButton: {
      options: ['Example icon 1', 'Example icon 2', 'Example icon 3'],
      mapping: {
        'Example icon 1': <Button aria-label="Label do btn" prefixIcon={<MdOutlineVisibility />} />,
        'Example icon 2': <Button aria-label="Label do btn" prefixIcon={<MdVisibility />} />,
        'Example icon 3': <Button aria-label="Label do btn" prefixIcon={<MdPerson />} />,
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'CPF',
  placeholder: 'CPF',
  helperText: 'Campo obrigatório',
  sufixIconButton: <Button aria-label="Label do btn" prefixIcon={<MdOutlineVisibility />} />,
}
