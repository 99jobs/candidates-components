import { Story } from '@storybook/react'
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
