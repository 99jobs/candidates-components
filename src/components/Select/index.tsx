import Downshift, { type ControllerStateAndHelpers } from 'downshift'
import { useState, type ComponentProps } from 'react'
import { MdSearch } from 'react-icons/md'
import { Button } from '../Button'
import { Input } from '../Input'
import { StyledSelectContainer } from './style'

export interface SelectProps<T> extends ComponentProps<typeof Downshift<T>> {
  /**
   * Os items que serão exibidos no select
   */
  items: T[]
}

export const Select = <T extends unknown>({ items, itemToString, ...props }: SelectProps<T>) => {
  const [selecteds, setSelecteds] = useState<T[]>([])

  const handleOnChange = (selectedItem: T | null, state: ControllerStateAndHelpers<T>) => {
    if (selectedItem) {
      if (!selecteds.includes(selectedItem)) {
        setSelecteds((prev) => [...prev, selectedItem])
      }

      // state.setState({ inputValue: '' })
      // state.clearSelection()
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
            <div>
              {selecteds.map((x, i) => (
                <button key={i} type="button" onClick={() => removeSelectedByIndex(i)}>
                  {itemToString?.(x)}
                </button>
              ))}
            </div>
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
