import Downshift, { type ControllerStateAndHelpers } from 'downshift'
import { useEffect, useRef, useState, type ComponentProps } from 'react'
import { MdExpandMore, MdSearch } from 'react-icons/md'
import { Button } from '../Button'
import { Input } from '../Input'
import { Tag } from '../Tag'
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
  /**
   * O placeholder usado no input
   */
  inputPlaceholder?: string
}

export const Select = <T extends unknown>({
  items,
  mode = 'single',
  inputPlaceholder,
  itemToString,
  ...props
}: SelectProps<T>) => {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)
  const [selecteds, setSelecteds] = useState<T[]>([])

  // No mode multiple estamos adicionaado várias tags dentro do box do input. Para a altura dele aumentar conforme as tags vão sendo adicionadas, criamos uma função para calcular o tamanho do container das tags
  const calculateInputHeight = () => {
    if (ref.current) {
      const { clientHeight } = ref.current

      if (clientHeight) {
        setHeight(clientHeight)
      }
    }
  }

  useEffect(() => {
    calculateInputHeight()
  }, [ref])

  const handleOnChange = (selectedItem: T | null, state: ControllerStateAndHelpers<T>) => {
    if (selectedItem) {
      if (mode === 'single') {
        setSelecteds([selectedItem])
      } else if (mode === 'multiple') {
        state.setState({ inputValue: '' })
        state.clearSelection()
        state.openMenu()
        if (!selecteds.includes(selectedItem)) {
          setSelecteds((prev) => [...prev, selectedItem])
        }
      }
    }

    calculateInputHeight()
  }

  const removeSelectedByIndex = (indexToRemove: number) => {
    setSelecteds((prev) => prev.filter((value, i) => i !== indexToRemove))
    setTimeout(() => calculateInputHeight(), 10)
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
              <StyledSelectTagsContainer ref={ref}>
                {selecteds.map((item, index) => (
                  <Tag
                    key={index}
                    label={itemToString?.(item) || ''}
                    onClick={() => removeSelectedByIndex(index)}
                    hasRemoveIcon
                  />
                ))}
              </StyledSelectTagsContainer>
            ) : null}

            <Input
              {...getInputProps()}
              label=""
              aria-label={inputPlaceholder}
              placeholder={inputPlaceholder}
              onFocus={() => openMenu()}
              onBlur={() => closeMenu()}
              sufixIconButton={
                mode === 'single' ? (
                  <Button
                    prefixIcon={<MdExpandMore />}
                    aria-label="Abrir opções"
                    onClick={() => openMenu()}
                  />
                ) : (
                  <Button prefixIcon={<MdSearch />} aria-label="Abrir opções" />
                )
              }
              style={{ minHeight: height }}
            />

            {isOpen ? (
              <ul {...getMenuProps()} aria-label="Lista de opções">
                {items.map((item, index) => (
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
                ))}
              </ul>
            ) : null}
          </StyledSelectContainer>
        )}
      </Downshift>
    </>
  )
}
