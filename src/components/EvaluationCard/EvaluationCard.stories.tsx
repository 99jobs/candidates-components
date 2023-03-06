/* eslint-disable no-alert */
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { EvaluationCard } from '.'

export default {
  title: 'Components/Data/EvaluationCard',
  component: EvaluationCard,
} as ComponentMeta<typeof EvaluationCard>

const Template: ComponentStory<typeof EvaluationCard> = (args) => <EvaluationCard {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <h1>Anônimo</h1>
      <h2>Desenvolvedor Front-end</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s
      </p>
    </>
  ),
}
