import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { Select } from '.'

export default {
  title: 'Components/Form/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { id: 1, label: 'Afeganistão' },
    { id: 2, label: 'África do Sul' },
    { id: 3, label: 'Albânia' },
    { id: 4, label: 'Brasil' },
    { id: 5, label: 'Estados Unidos' },
    { id: 6, label: 'França' },
    { id: 7, label: 'Itália' },
  ],
  itemToString: (item: any) => (item ? item.label : ''),
  mode: 'single',
  label: '',
  placeholder: 'País de origem',
}

export const MultipleWithRequiredValidation: ComponentStory<typeof Select> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    console.log('errors', errors)
    console.log('data', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        items={[
          { id: 1, label: 'Afeganistão' },
          { id: 2, label: 'África do Sul' },
          { id: 3, label: 'Albânia' },
          { id: 4, label: 'Brasil' },
          { id: 5, label: 'Estados Unidos' },
          { id: 6, label: 'França' },
          { id: 7, label: 'Itália' },
        ]}
        itemToString={(item: any) => (item ? item.label : '')}
        mode="multiple"
        label=""
        placeholder="País de origem"
        {...register('country', {
          required: {
            value: true,
            message: 'País é obrigatório',
          },
        })}
        errorText={errors.country && errors.country.message?.toString()}
      />

      <br />
      <br />
      <br />
      <br />

      <input type="submit" />
    </form>
  )
}

// MultipleWithRequiredValidation.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement)
//   const input = canvas.getByPlaceholderText('País de origem')

//   // Valida campo vazio
//   await new Promise((r) => setTimeout(r, 300))
//   input.focus()
//   input.blur()
//   await new Promise((r) => setTimeout(r, 300))
//   expect(canvas.queryByRole('alert')).toHaveTextContent('País é obrigatório')

//   // Valida se navegação por teclado funciona
//   input.focus()
//   await userEvent.type(input, '{arrowdown}')
//   await userEvent.type(input, '{arrowdown}')
//   expect(canvas.queryByText('África do Sul')).toHaveAttribute('aria-selected', 'true')

//   // Valida se dando Enter valor é selecionado
//   input.focus()
//   await userEvent.type(input, '{arrowdown}')
//   await userEvent.type(input, '{enter}')
//   expect(canvas.queryByRole('listitem')).toHaveTextContent('Albânia')
//   await userEvent.type(input, '{arrowdown}')
//   await userEvent.type(input, '{arrowdown}')
//   await userEvent.type(input, '{enter}')
//   expect(canvas.queryAllByRole('listitem')[0]).toHaveTextContent('Albânia')
//   expect(canvas.queryAllByRole('listitem')[1]).toHaveTextContent('África do Sul')

//   // Apaga um dos valores selecionados
//   await userEvent.click(canvas.queryAllByRole('listitem')[0])
//   expect(canvas.queryAllByRole('listitem')[0]).toHaveTextContent('África do Sul')
// }
