import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MdOutlineCameraAlt } from 'react-icons/md'
import { Avatar } from './index'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    label: { control: false },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  fallback: 'CA',
  sufixIcon: <MdOutlineCameraAlt />,
  // avatar: <MdPerson size="8rem" className="icon" />,
  label: 'Editar',
}

export const DefaultWithoutLabel = Template.bind({})
DefaultWithoutLabel.args = {
  src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
  alt: 'girl',
  sufixIcon: <MdOutlineCameraAlt />,
}

export const DefaultWithLabel = Template.bind({})
DefaultWithLabel.args = {
  src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
  alt: 'girl',
  sufixIcon: <MdOutlineCameraAlt />,
  label: 'Editar',
}
