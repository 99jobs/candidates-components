import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Chip } from '.'

export default {
  title: 'Components/Data/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const LevelChip = Template.bind({})
LevelChip.args = {
  label: 'Freelancer',
  color: 'level',
}

export const ActingModeChip = Template.bind({})
ActingModeChip.args = {
  label: 'Remoto',
  color: 'outlined',
}

export const PCDChip = Template.bind({})
PCDChip.args = {
  label: 'PCD',
  color: 'outlined',
}

export const UrgentChip = Template.bind({})
UrgentChip.args = {
  label: 'Urgente',
  color: 'urgent',
}
