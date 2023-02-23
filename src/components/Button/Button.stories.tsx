import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CloseCircle, Profile } from 'iconsax-react'
import { Button } from './index'

export default {
  title: 'Components/Form/Button',
  component: Button,
  argTypes: {
    prefixIcon: {
      options: ['Example icon 1', 'Example icon 2', 'Example icon 3'],
      mapping: {
        'Example icon 1': <Profile size={19} />,
        'Example icon 2': <Profile size={19} />,
        'Example icon 3': <Profile size={19} />,
      },
    },
    sufixIcon: {
      options: ['Example icon 1', 'Example icon 2', 'Example icon 3'],
      mapping: {
        'Example icon 1': <Profile size={19} />,
        'Example icon 2': <Profile size={19} />,
        'Example icon 3': <Profile size={19} />,
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
  prefixIcon: <Profile size={19} />,
}

export const DefaultWithSufixIcon = Template.bind({})
DefaultWithSufixIcon.args = {
  label: 'Button',
  sufixIcon: <Profile size={19} />,
}

export const DefaultWithoutLabel = Template.bind({})
DefaultWithoutLabel.args = {
  prefixIcon: <Profile size={19} />,
  'aria-label': 'Botão para salvar o formulário de Dados Pessoais',
}

export const IconButton = Template.bind({})
IconButton.args = {
  color: 'onlyIcon',
  prefixIcon: <CloseCircle size={26} />,
  'aria-label': 'Botão para fazer tal ação',
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
