import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { EmojiHappy } from 'iconsax-react'
import { Accordion } from '.'
import { AccordionContent } from '../AccordionContent'
import { AccordionItem } from '../AccordionItem'
import { AccordionTrigger } from '../AccordionTrigger'

export default {
  title: 'Components/Layout/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const AccordionChilds = (
  <>
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <EmojiHappy /> Is it accessible?
      </AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        <EmojiHappy /> Is it unstyled?
      </AccordionTrigger>
      <AccordionContent>
        Yes. Its unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
        <EmojiHappy /> Can it be animated?
      </AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </>
)

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const Single = Template.bind({})
Single.args = {
  type: 'single',
  defaultValue: 'item-1',
  collapsible: true,
  children: AccordionChilds,
}

export const Multiple = Template.bind({})
Multiple.args = {
  type: 'multiple',
  defaultValue: ['item-1'],
  children: AccordionChilds,
}
