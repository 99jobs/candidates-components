import Downshift, { type ControllerStateAndHelpers } from 'downshift'
import { useState, type ComponentProps } from 'react'
import { Input } from '../Input'

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

      state.setState({ inputValue: '' })
      state.clearSelection()
    }
  }

  return (
    <>
      <Downshift {...props} itemToString={itemToString} onChange={handleOnChange}>
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          isOpen,
          getRootProps,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <div
              style={{ display: 'inline-block' }}
              {...getRootProps(undefined, { suppressRefError: true })}
            >
              <Input {...getInputProps()} label="Buscar" />
            </div>

            <ul {...getMenuProps()}>
              {isOpen
                ? items.map((item, index) => (
                    <li
                      key={index}
                      {...getItemProps({
                        key: index,
                        index,
                        item,
                        style: {
                          backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {itemToString?.(item)}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    </>
  )
}
