import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import { Radio, RadioGroup } from '.'
import { Button } from '../Button'

export default {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
  subcomponents: { Radio },
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />
export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Radio label="Argentina" value="ar" id="ar" />
      <Radio label="Brasil" value="br" id="br" />
      <Radio label="Italia" value="it" id="it" />
    </>
  ),
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: (
    <>
      <Radio label="Argentina" value="ar" id="ar" />
      <Radio label="Brasil" value="br" id="br" disabled />
      <Radio label="Italia" value="it" id="it" />
    </>
  ),
}

export const ExampleWithRequiredValidation: ComponentStory<typeof RadioGroup> = () => {
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
            message: 'É obrigatório informar um país',
          },
        }}
        render={({ field }) => (
          <RadioGroup {...field} errorText={errors.country && errors.country.message?.toString()}>
            <Radio label="Brasil" value="br" />
            <Radio label="Argentina" value="ar" />
          </RadioGroup>
        )}
      />

      <Button label="Validar" />
    </form>
  )
}
