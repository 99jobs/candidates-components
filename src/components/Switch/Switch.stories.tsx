import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import { Switch } from '.'
import { Button } from '../Button'

export default {
  title: 'Components/Form/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Aceito os Termos de Uso',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Aceito os Termos de Uso',
  disabled: true,
}

export const ExampleWithRequiredValidation: ComponentStory<typeof Switch> = () => {
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
        name="acceptTerms"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'É obrigatório aceitar os termos de uso',
          },
        }}
        render={({ field }) => (
          <Switch
            {...field}
            label="Aceito os Termos de Uso"
            errorText={errors.acceptTerms && errors.acceptTerms.message?.toString()}
          />
        )}
      />

      <Button label="Validar" />
    </form>
  )
}
