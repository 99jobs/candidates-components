import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Modal, ModalBody, ModalClose, ModalFooter, ModalHeader, ModalTitle } from '.'
import { Button } from '../Button'

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(args.open ?? false)
  }, [args.open])

  const handleModal = () => setIsOpen(!isOpen)

  return (
    <div>
      <Button label="Abrir Modal" onClick={handleModal} />
      <Modal {...args} open={isOpen} onOpenChange={handleModal}>
        <ModalHeader>
          <ModalTitle>Tem certeza?</ModalTitle>

          <ModalClose>
            <MdClose size={32} />
          </ModalClose>
        </ModalHeader>

        <ModalBody>
          <p>Hello World!!!!</p>
        </ModalBody>

        <ModalFooter>
          <Button label="Não" color="ghost" onClick={() => alert('oi =)')} />
          <Button label="Sim" onClick={() => alert('oi =)')} />
        </ModalFooter>
      </Modal>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  scroll: 'body',
}
