import { forwardRef } from 'react'
import { Props } from 'react-select'
import { StyledReactSelect } from './style'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const Inputx = ({ ...props }) => <input {...props} />

export const Select2 = forwardRef<any, Props>((props, ref) => (
  <StyledReactSelect
    ref={ref}
    {...props}
    options={options}
    isClearable
    isSearchable
    components={{ Input: Inputx }}
    className="teste"
    classNamePrefix="teste"
  />
))

Select2.displayName = 'Select2'
