/* eslint-disable no-alert */
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { MdClose } from 'react-icons/md'
import { Tag } from '.'

export default {
  title: 'Components/Data/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Design centrado no usuário',
}

export const WithRemoveIcon = Template.bind({})
WithRemoveIcon.args = {
  children: (
    <>
      <span>Design centrado no usuário</span>
      <button
        type="button"
        aria-label="Remover opção Design centrado no usuário"
        onClick={() => alert('Alguma ação')}
      >
        <MdClose />
      </button>
    </>
  ),
}
