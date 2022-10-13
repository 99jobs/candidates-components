import { expect } from '@storybook/jest'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { useForm } from 'react-hook-form'
import { MdOutlineVisibility, MdPerson, MdVisibility } from 'react-icons/md'
import isEmail from 'validator/es/lib/isEmail'
import isStrongPassword from 'validator/es/lib/isStrongPassword'
import { Input } from '.'

import { Button } from '../Button'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    sufixIconButton: {
      options: ['Example icon 1', 'Example icon 2', 'Example icon 3'],
      mapping: {
        'Example icon 1': <Button aria-label="Label do btn" prefixIcon={<MdOutlineVisibility />} />,
        'Example icon 2': <Button aria-label="Label do btn" prefixIcon={<MdVisibility />} />,
        'Example icon 3': <Button aria-label="Label do btn" prefixIcon={<MdPerson />} />,
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'CPF',
  placeholder: 'CPF',
  helperText: 'Um texto para auxiliar',
  sufixIconButton: <Button aria-label="Label do btn" prefixIcon={<MdOutlineVisibility />} />,
}

// Abaixo um exemplo de implementação do componente Input, utilizando a lib react-hook-form para fazer as devidas validações
export const ExampleWithEmailValidation: ComponentStory<typeof Input> = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  return (
    <>
      <Input
        label="E-mail"
        type="email"
        {...register('email', {
          required: {
            value: true,
            message: 'E-mail é obrigatório',
          },
          validate: (v) => (isEmail(v) ? true : 'E-mail inválido'),
        })}
        errorText={errors.email && errors.email.message?.toString()}
      />
    </>
  )
}

ExampleWithEmailValidation.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const input = canvas.getByLabelText('E-mail')

  // Valida e-mail vazio
  await new Promise((r) => setTimeout(r, 300))
  input.focus()
  input.blur()
  await new Promise((r) => setTimeout(r, 300))
  expect(canvas.queryByRole('alert')).toHaveTextContent('E-mail é obrigatório')

  // Valida e-mail inválido
  userEvent.clear(input)
  await userEvent.type(input, 'emailinvalido@invalid', { delay: 100 })
  input.blur()
  await new Promise((r) => setTimeout(r, 300))
  expect(canvas.queryByRole('alert')).toHaveTextContent('E-mail inválido')

  // Valida e-mail sucesso
  userEvent.clear(input)
  await userEvent.type(input, 'email@valido.com', { delay: 100 })
  input.blur()
  await new Promise((r) => setTimeout(r, 300))
  expect(canvas.queryByRole('alert')).not.toBeInTheDocument()
}

export const ExampleWithPasswordValidation: ComponentStory<typeof Input> = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  return (
    <>
      <Input
        label="Senha"
        type="password"
        showAndHidePasswordButton
        {...register('password', {
          required: {
            value: true,
            message: 'Senha é obrigatória',
          },
          validate: (v) => (isStrongPassword(v) ? true : 'Senha fraca'),
        })}
        errorText={errors.password && errors.password.message?.toString()}
      />
    </>
  )
}

ExampleWithPasswordValidation.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const input = canvas.getByLabelText('Senha')

  // Valida senha vazia
  await new Promise((r) => setTimeout(r, 300))
  input.focus()
  input.blur()
  await new Promise((r) => setTimeout(r, 300))
  expect(canvas.queryByRole('alert')).toHaveTextContent('Senha é obrigatória')

  // Valida senha fraca
  userEvent.clear(input)
  await userEvent.type(input, 'abc123', { delay: 100 })
  input.blur()
  await new Promise((r) => setTimeout(r, 300))
  expect(canvas.queryByRole('alert')).toHaveTextContent('Senha fraca')

  // Valida senha forte
  userEvent.clear(input)
  await userEvent.type(input, 'kMu2!@kka2', { delay: 100 })
  input.blur()
  await new Promise((r) => setTimeout(r, 300))
  expect(canvas.queryByRole('alert')).not.toBeInTheDocument()

  // Valida se clicando no ícone de exibir a senha a senha fica visível
  const showPasswordButton = canvas.getByRole('button')

  expect(input.getAttribute('type')).toEqual('password')
  userEvent.click(showPasswordButton)
  await new Promise((r) => setTimeout(r, 300))
  expect(input.getAttribute('type')).toEqual('text')
  userEvent.click(showPasswordButton)
  await new Promise((r) => setTimeout(r, 300))
  expect(input.getAttribute('type')).toEqual('password')
}
