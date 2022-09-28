import { expect } from '@storybook/jest'
import { Story } from '@storybook/react'
import { within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'
import { Popover, PopoverProps } from './index'

export default {
  title: 'Components/Popover',
  component: Popover,
}

const Template: Story<PopoverProps> = (args) => <Popover {...args} />

export const Default = Template.bind({})
Default.args = {
  triggerNode: <Button label="Open Popup" />,
  contentNode: <p>Hello World!!</p>,
}

Default.play = async ({ canvasElement }) => {
  // Cria o canvas
  const canvas = within(canvasElement)

  // Clica no botão que aciona o popover
  userEvent.click(canvas.getByRole('button'))

  // Como o popover criado não vam no canvasElement, e sim na body, precisamos "procurar" a body a partir do botão que acionou o popover
  const body = canvasElement.closest('body')
  // Cria o canvas da body agora
  const bodyCanvas = within(body || canvasElement)

  // Procura o popover a partir de uma role
  const popover = bodyCanvas.getByRole('dialog')

  // Esperamos que o popover tenha sido criado e que ele contenha o elemento passado no parâmetro contentNode
  expect(popover).toBeInTheDocument()
  expect(popover.innerHTML).toContain('<p>Hello World!!</p>')
}
