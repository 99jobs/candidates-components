import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import { Switch } from '.'

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
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm()

  // eslint-disable-next-line no-console
  console.log('erros', errors)

  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('values', getValues())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ minWidth: 320 }}>
      <Controller
        name="acceptTermsOfUse"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'É obrigatório aceitar os termos',
          },
        }}
        render={({ field }) => (
          <Switch
            {...field}
            label="Aceito os termos de uso"
            errorText={errors.acceptTermsOfUse && errors.acceptTermsOfUse.message?.toString()}
          />
        )}
      />
      <br />
      <br />
      <br />
      <br />
      <button type="submit">Avançar</button>
    </form>
  )
}
