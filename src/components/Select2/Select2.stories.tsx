import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import { Select2 } from '.'

export default {
  title: 'Components/Form/Select2',
  component: Select2,
} as ComponentMeta<typeof Select2>

export const MultipleWithRequiredValidation: ComponentStory<typeof Select2> = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    console.log('errors', errors)
    console.log('data', data)
  }

  console.log(errors.country && errors.country.message?.toString())

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller name="select" control={control} render={({ field }) => <Select2 {...field} />} />

      <br />
      <br />
      <br />
      <br />

      <input type="submit" />
    </form>
  )
}
