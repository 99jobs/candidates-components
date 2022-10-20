import Downshift, { type ControllerStateAndHelpers } from 'downshift'
import { useState, type ComponentProps } from 'react'
import { MdSearch } from 'react-icons/md'
import { Button } from '../Button'
import { Input } from '../Input'
import { StyledSelectContainer, StyledSelectTagsContainer } from './style'

export interface SelectProps<T> extends ComponentProps<typeof Downshift<T>> {
  /**
   * Os items que serão exibidos no select
   */
  items: T[]
  /**
   * O select é de uma única opção ou várias opções
   */
  mode: 'single' | 'multiple'
}

export const Select = <T extends unknown>({
  items,
  mode = 'single',
  itemToString,
  ...props
}: SelectProps<T>) => {
  const [selecteds, setSelecteds] = useState<T[]>([])

  const handleOnChange = (selectedItem: T | null, state: ControllerStateAndHelpers<T>) => {
    if (selectedItem) {
      if (mode === 'single') {
        setSelecteds([selectedItem])
      } else if (mode === 'multiple') {
        if (!selecteds.includes(selectedItem)) {
          setSelecteds((prev) => [...prev, selectedItem])
          state.clearSelection()
          state.setState({ inputValue: '' })
        }
      }
    }
  }

  const removeSelectedByIndex = (indexToRemove: number) => {
    setSelecteds((prev) => prev.filter((value, i) => i !== indexToRemove))
  }

  return (
    <>
      <Downshift {...props} itemToString={itemToString} onChange={handleOnChange}>
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          getRootProps,
          openMenu,
          closeMenu,
          isOpen,
        }) => (
          <StyledSelectContainer
            {...getRootProps(undefined, { suppressRefError: true })}
            data-has-selected={selecteds.length > 0}
          >
            {mode === 'multiple' ? (
              <StyledSelectTagsContainer>
                {selecteds.map((item, index) => (
                  <span key={index} onClick={() => removeSelectedByIndex(index)}>
                    {itemToString?.(item)}
                  </span>
                ))}
              </StyledSelectTagsContainer>
            ) : null}

            <Input
              {...getInputProps()}
              label=""
              placeholder="Selecione"
              onFocus={() => openMenu()}
              onBlur={() => closeMenu()}
              sufixIconButton={<Button prefixIcon={<MdSearch />} />}
            />

            <ul {...getMenuProps()}>
              {isOpen
                ? items.map((item, index) => (
                    <li
                      key={index}
                      {...getItemProps({
                        key: index,
                        index,
                        item,
                      })}
                    >
                      {itemToString?.(item)}
                    </li>
                  ))
                : null}
            </ul>
          </StyledSelectContainer>
        )}
      </Downshift>
    </>
  )
}
