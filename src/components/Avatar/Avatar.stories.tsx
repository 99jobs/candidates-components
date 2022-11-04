import { expect } from '@storybook/jest'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { Avatar } from './index'

export default {
  title: 'Components/Data/Avatar',
  component: Avatar,
  argTypes: {
    label: { control: false },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  fallback: 'CA',
}

export const DefaultWithoutLabel = Template.bind({})
DefaultWithoutLabel.args = {
  src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
  alt: 'girl',
  fallback: 'CA',
  label: false,
}

export const DefaultWithLabel = Template.bind({})
DefaultWithLabel.args = {
  src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
  alt: 'girl',
  fallback: 'CA',
}

/* Testes */

DefaultWithLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await new Promise((r) => setTimeout(r, 1000))
  // Testar se está renderizando uma img com o alt e a src informado
  expect(canvas.getByRole('img')).toBeInTheDocument()
  expect(canvas.getByRole('img').getAttribute('alt')).toBe('girl')
  expect(canvas.getByRole('img').getAttribute('src')).toBe(
    'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
  )
}

export const DefaultWithInvalidSrc = Template.bind({})
DefaultWithInvalidSrc.args = {
  src: '',
  alt: 'girl',
  fallback: 'CA',
}

DefaultWithInvalidSrc.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await new Promise((r) => setTimeout(r, 1000))
  // Testar se passando uma URL inválida o fallback está sendo exibido
  expect(canvas.getByText('CA')).toBeInTheDocument()
}
