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

export const Multiple = Template.bind({})
Multiple.args = {
  items: [
    { id: 1, label: 'HTML' },
    { id: 2, label: 'CSS' },
    { id: 3, label: 'Figma' },
    { id: 4, label: 'Excel' },
    { id: 5, label: 'Rails' },
    { id: 6, label: 'Postgres' },
    { id: 7, label: 'React' },
  ],
  itemToString: (item: any) => (item ? item.label : ''),
  mode: 'multiple',
  label: '',
  placeholder: 'Habilidades',
}

export const ExampleWithRequiredValidation: ComponentStory<typeof Select> = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  return (
    <>
      <Select
        label=""
        items={[
          { id: 1, label: 'HTML' },
          { id: 2, label: 'CSS' },
          { id: 3, label: 'Figma' },
          { id: 4, label: 'Excel' },
          { id: 5, label: 'Rails' },
          { id: 6, label: 'Postgres' },
          { id: 7, label: 'React' },
        ]}
        itemToString={(item: any) => (item ? item.label : '')}
        mode="multiple"
        {...register('password', {
          required: {
            value: true,
            message: 'Senha é obrigatória',
          },
        })}
        errorText={errors.password && errors.password.message?.toString()}
      />
    </>
  )
}
