import { expect } from '@storybook/jest'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Controller, useForm } from 'react-hook-form'
import { Select } from '.'

export default {
  title: 'Components/Form/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ minWidth: 320 }}>
    <Select {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  options: [
    { value: 1, label: 'Afeganistão' },
    { value: 2, label: 'África do Sul' },
    { value: 3, label: 'Albânia' },
    { value: 4, label: 'Brasil' },
    { value: 5, label: 'Estados Unidos' },
    { value: 6, label: 'França' },
    { value: 7, label: 'Itália' },
  ],
  isMulti: true,
  placeholder: 'Selecione',
  'aria-label': 'Selecione um país',
}

export const ExampleWithRequiredValidation: ComponentStory<typeof Select> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log('data', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ minWidth: 320 }}>
      <Controller
        name="country"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'País é obrigatório',
          },
        }}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: 1, label: 'Afeganistão' },
              { value: 2, label: 'África do Sul' },
              { value: 3, label: 'Albânia' },
              { value: 4, label: 'Brasil' },
              { value: 5, label: 'Estados Unidos' },
              { value: 6, label: 'França' },
              { value: 7, label: 'Itália' },
            ]}
            errorText={errors.country && errors.country.message?.toString()}
            placeholder="Selecione"
            aria-label="Selecione um país"
          />
        )}
      />
    </form>
  )
}

ExampleWithRequiredValidation.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const input = canvas.getByLabelText('Selecione um país')

  // Valida e-mail vazio
  await new Promise((r) => setTimeout(r, 300))
  input.focus()
  input.blur()
  await new Promise((r) => setTimeout(r, 300))
  expect(canvas.queryByRole('alert')).toHaveTextContent('País é obrigatório')

  // Valida se ao selecionar uma opção o alert é removido
  userEvent.clear(input)
  await userEvent.type(input, 'Bra{enter}', { delay: 100 })
  input.blur()
  await new Promise((r) => setTimeout(r, 300))
  expect(canvas.queryByRole('alert')).not.toBeInTheDocument()
}
