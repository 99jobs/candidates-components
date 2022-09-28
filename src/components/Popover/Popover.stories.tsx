import { expect } from '@storybook/jest'
import { Story } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
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
  const canvas = within(canvasElement)

  // Clica no botão que aciona o popover
  userEvent.click(canvas.getByRole('button'))

  // Como o popover criado não vam no canvasElement, e sim na body, precisamos "procurar" a body a partir do botão que acionou o popover
  const body = within(canvasElement.closest('body') ?? canvasElement)

  // waitFor usado para dar tempo do popover aparecer
  await waitFor(() => {
    const popover = body.getByRole('dialog')

    // Esperamos que o popover tenha sido criado e que ele contenha o elemento passado no parâmetro contentNode
    expect(popover).toBeInTheDocument()
    expect(popover.innerHTML).toContain('<p>Hello Word!!</p>')
  })
}
