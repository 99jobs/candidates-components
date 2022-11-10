import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import { Checkbox } from '.'
import { Button } from '../Button'

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Brasil',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Brasil',
  disabled: true,
}

export const ExampleWithRequiredValidation: ComponentStory<typeof Checkbox> = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('values', getValues())
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: 30, width: 320 }}
    >
      <Controller
        name="country"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'É obrigatório informar o país',
          },
        }}
        render={({ field }) => (
          <Checkbox
            {...field}
            label="Brasil"
            errorText={errors.country && errors.country.message?.toString()}
          />
        )}
      />

      <Button label="Validar" />
    </form>
  )
}
