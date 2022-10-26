/* eslint-disable no-console */
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import { Select } from '.'

export default {
  title: 'Components/Form/Select2',
  component: Select,
} as ComponentMeta<typeof Select>

export const MultipleWithRequiredValidation: ComponentStory<typeof Select> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log('data', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            label=""
            placeholder="País"
            items={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
            errorText={errors.country && errors.country.message?.toString()}
          />
        )}
      />

      <br />
      <br />

      <input type="submit" />
    </form>
  )
}
