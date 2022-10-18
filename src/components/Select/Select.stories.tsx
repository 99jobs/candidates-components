import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Select } from '.'

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { id: 1, label: 'João', value: 'joao' },
    { id: 2, label: 'Laís', value: 'lais' },
    { id: 3, label: 'Lucy', value: 'lucy' },
    { id: 4, label: 'Zuck', value: 'zick' },
  ],
  itemToString: (item: any) => (item ? item.label : ''),
}
