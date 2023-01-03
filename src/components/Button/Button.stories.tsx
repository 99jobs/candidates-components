import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCircle } from 'iconsax-react'
import { Button } from './index'

export default {
  title: 'Components/Form/Button',
  component: Button,
  argTypes: {
    prefixIcon: {
      options: ['Example icon 1', 'Example icon 2', 'Example icon 3'],
      mapping: {
        'Example icon 1': <ProfileCircle />,
        'Example icon 2': <ProfileCircle />,
        'Example icon 3': <ProfileCircle />,
      },
    },
    sufixIcon: {
      options: ['Example icon 1', 'Example icon 2', 'Example icon 3'],
      mapping: {
        'Example icon 1': <ProfileCircle />,
        'Example icon 2': <ProfileCircle />,
        'Example icon 3': <ProfileCircle />,
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}

export const DefaultWithPrefixIcon = Template.bind({})
DefaultWithPrefixIcon.args = {
  label: 'Button',
  prefixIcon: <ProfileCircle />,
}

export const DefaultWithSufixIcon = Template.bind({})
DefaultWithSufixIcon.args = {
  label: 'Button',
  sufixIcon: <ProfileCircle />,
}

export const DefaultWithoutLabel = Template.bind({})
DefaultWithoutLabel.args = {
  prefixIcon: <ProfileCircle />,
  'aria-label': 'Botão para salvar o formulário de Dados Pessoais',
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Button',
  color: 'outline',
}

export const Ghost = Template.bind({})
Ghost.args = {
  label: 'Button',
  color: 'ghost',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',
  disabled: true,
}
