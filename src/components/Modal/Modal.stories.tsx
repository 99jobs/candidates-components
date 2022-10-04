import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button'
import { Modal, ModalProps } from './index'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button label="Abrir Modal" onClick={() => setIsOpen(!isOpen)} />

      <Modal open={isOpen} onOpenChange={(open) => setIsOpen(open)} {...args} />
    </div>
  )
}

export const Default = Template.bind({})
