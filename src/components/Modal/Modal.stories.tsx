import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button'
import { Modal } from './index'

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button label="Abrir Modal" onClick={() => setIsOpen(!isOpen)} />

      <Modal open={isOpen} onOpenChange={(open) => setIsOpen(open)} {...args} />
    </div>
  )
}

export const Default = Template.bind({})
