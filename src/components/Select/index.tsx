import Downshift, { ControllerStateAndHelpers } from 'downshift'
import { ComponentProps, forwardRef, Ref, useEffect, useRef, useState } from 'react'
import { MdExpandMore, MdSearch } from 'react-icons/md'
import { compareString } from '../../utils/compareString'
import { Button } from '../Button'
import { Input } from '../Input'
import { Tag } from '../Tag'
import { StyledSelectContainer, StyledSelectTagsContainer } from './style'

export interface SelectProps<T>
  extends ComponentProps<typeof Input>,
    Pick<ComponentProps<typeof Downshift>, 'itemToString'> {
  /**
   * Os items que serão exibidos no select
   */
  items: T[]
  /**
   * O select é de uma única opção ou várias opções
   */
  mode: 'single' | 'multiple'
}

export const Select = forwardRef(
  <T extends unknown>(
    { items, mode, itemToString, ...props }: SelectProps<T>,
    ref: Ref<HTMLInputElement>
  ) => {
    const [selecteds, setSelecteds] = useState<T[]>([])
    const tagsContainerRef = useRef(null)
    const [tagContainerHeight, setTagContainerHeight] = useState(0)
    const [term, setTerm] = useState('')

    // No mode multiple estamos adicionaado várias tags dentro do box do input. Para a altura dele aumentar conforme as tags vão sendo adicionadas, criamos uma função para calcular o tamanho do container das tags
    const calculateInputHeight = () => {
      if (tagsContainerRef.current) {
        const { clientHeight } = tagsContainerRef.current

        if (clientHeight) {
          setTagContainerHeight(clientHeight)
        }
      }
    }

    useEffect(() => {
      calculateInputHeight()
    }, [tagsContainerRef])

    const handleDropdownChange = (selectedItem: T | null, state: ControllerStateAndHelpers<T>) => {
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
      <Downshift itemToString={itemToString} onChange={handleDropdownChange}>
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
              <StyledSelectTagsContainer ref={tagsContainerRef} role="listbox">
                {selecteds.map((item, index) => (
                  <Tag
                    key={index}
                    label={itemToString?.(item) || ''}
                    onClick={() => removeSelectedByIndex(index)}
                    hasRemoveIcon
                    role="listitem"
                  />
                ))}
              </StyledSelectTagsContainer>
            ) : null}

            {/* Controle do input */}
            <input
              ref={ref}
              defaultValue={selecteds}
              style={{
                width: 0,
                height: 0,
                opacity: 0,
                overflow: 'hidden',
                position: 'absolute',
                zIndex: '-999999',
              }}
            />

            {/* UI do input */}
            <Input
              {...getInputProps({
                ...props,
                onFocus: (e) => {
                  openMenu()
                  props.onFocus?.(e)
                },
                onBlur: (e) => {
                  closeMenu()
                  props.onBlur?.(e)
                },
                onChange: (e) => {
                  setTerm(e.target.value)
                  props.onChange?.(e)
                },
              })}
              autoComplete="off"
              style={{ minHeight: tagContainerHeight }}
              sufixIconButton={
                <Button
                  prefixIcon={mode === 'single' ? <MdExpandMore /> : <MdSearch />}
                  aria-label="Abrir opções"
                  onClick={() => openMenu()}
                />
              }
            />

            {isOpen ? (
              <ul {...getMenuProps()} aria-label="Lista de opções">
                {items
                  .filter((item) => compareString(itemToString?.(item), term))
                  .map((item, index) => (
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
    )
  }
)

Select.displayName = 'Select'
