import { ArrowDown2, CloseCircle } from 'iconsax-react'
import { forwardRef, type ComponentProps } from 'react'
import { Input } from '../Input'
import { StyledInputHelperText } from '../Input/style'
import { Tag } from '../Tag'
import { StyledNoOption, StyledReactSelect, StyledReactSelectWrapper } from './style'

export interface SelectProps
  extends ComponentProps<typeof StyledReactSelect>,
    Pick<ComponentProps<typeof Input>, 'errorText' | 'helperText'> {}

export const Select = forwardRef(({ errorText, helperText, ...props }: SelectProps, ref: any) => (
  <StyledReactSelectWrapper data-has-error={errorText !== undefined}>
    <StyledReactSelect
      ref={ref}
      {...props}
      className={`custom-select`}
      classNamePrefix={`custom-select`}
      components={{
        IndicatorSeparator: () => <></>,
        DropdownIndicator: () => <ArrowDown2 />,
        MultiValueContainer: ({ children }) => <Tag>{children}</Tag>,
        MultiValueRemove: ({ innerProps }) => (
          <div {...innerProps} role="button">
            <CloseCircle />
          </div>
        ),
        NoOptionsMessage: () => <StyledNoOption>Nenhuma opção</StyledNoOption>,
      }}
    />

    {(errorText || helperText) && (
      <StyledInputHelperText role="alert">{errorText || helperText}</StyledInputHelperText>
    )}
  </StyledReactSelectWrapper>
))

Select.displayName = 'Select'
