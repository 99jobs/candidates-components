import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Radio, RadioGroup } from '.'

export default {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
  subcomponents: { Radio },
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />
export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Radio label="Argentina" value="ar" id="ar" />
      <Radio label="Brasil" value="br" id="br" />
      <Radio label="Italia" value="it" id="it" />
    </>
  ),
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: (
    <>
      <Radio label="Argentina" value="ar" id="ar" />
      <Radio label="Brasil" value="br" id="br" disabled />
      <Radio label="Italia" value="it" id="it" />
    </>
  ),
}
