import * as SelectPrimitive from '@radix-ui/react-select'
import { forwardRef, useState } from 'react'

export const Select = forwardRef<HTMLInputElement, {}>((props, ref) => {
  const [value, setValue] = useState('')

  const setNewValue = (vvv: string) => {
    setValue(vvv)
  }

  return (
    <>
      <input ref={ref} {...props} defaultValue={value} />

      <SelectPrimitive.Root value={value} onValueChange={setNewValue}>
        <SelectPrimitive.Trigger>
          <SelectPrimitive.Value placeholder="PLaceholder" />
          <SelectPrimitive.Icon />
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content>
            <SelectPrimitive.ScrollUpButton />
            <SelectPrimitive.Viewport>
              <SelectPrimitive.Item value="1">
                <SelectPrimitive.ItemText>Um</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>

              <SelectPrimitive.Item value="2">
                <SelectPrimitive.ItemText>Dois</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </>
  )
})

Select.displayName = 'Select'
