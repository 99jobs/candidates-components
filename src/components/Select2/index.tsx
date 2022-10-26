import { ComponentProps, forwardRef } from 'react'
import { Input } from '../Input'
import { StyledReactSelect } from './style'

export interface SelectProps<T> extends Omit<ComponentProps<typeof Input>, 'onChange'> {
  items: T[]
}

export const Select = forwardRef(
  <T extends unknown>({ items, ...props }: SelectProps<T>, ref: any) => (
    <StyledReactSelect
      ref={ref}
      {...props}
      options={items}
      isClearable
      isSearchable
      isMulti
      components={{
        Input: ({ ...innerProps }) => <Input {...props} {...innerProps} />,
        DropdownIndicator: () => <></>,
        ClearIndicator: () => <></>,
        Placeholder: () => <></>,
      }}
      className={`custom-select ${props.errorText && 'has-error'}`}
      classNamePrefix={`custom-select`}
    />
  )
)

Select.displayName = 'Select'
