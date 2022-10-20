import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Tag } from '.'

export default {
  title: 'Components/Data/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Design centrado no usuário',
}

export const WithRemoveIcon = Template.bind({})
WithRemoveIcon.args = {
  label: 'Design centrado no usuário',
  hasRemoveIcon: true,
  onClick: () => {
    alert('Some action')
  },
}
