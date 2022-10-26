/* eslint-disable no-console */
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { Select } from '.'

export default {
  title: 'Components/Form/Select3',
  component: Select,
} as ComponentMeta<typeof Select>

export const MultipleWithRequiredValidation: ComponentStory<typeof Select> = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log('data', data)
  }

  console.log('errors', errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        {...register('country', {
          required: {
            value: true,
            message: 'País é obrigatório 1111',
          },
        })}
      />

      <br />
      <br />
      <br />
      <br />

      <input type="submit" />
    </form>
  )
}
