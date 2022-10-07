import { Meta, Story } from '@storybook/react'
import { MdOutlineVisibility, MdPerson, MdVisibility } from 'react-icons/md'
import { Icon, IconProps } from '.'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    children: {
      options: ['Example icon 1', 'Example icon 2', 'Example icon 3'],
      mapping: {
        'Example icon 1': <MdOutlineVisibility size={30} />,
        'Example icon 2': <MdVisibility size={30} />,
        'Example icon 3': <MdPerson size={30} />,
      },
    },
  },
} as Meta<IconProps>

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Ícone de visualizar senha digitada',
  children: <MdOutlineVisibility size={30} />,
}
