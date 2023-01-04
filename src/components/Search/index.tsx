import { type ComponentProps } from '@stitches/react'
import { CloseCircle, SearchNormal1, Setting4 } from 'iconsax-react'
import { useCallback, useEffect, useState, type FormEvent } from 'react'
import {
  StyledAreaSearchGroup,
  StyledCloseSearch,
  StyledSearchContainer,
  StyledSearchFullScreen,
  StyledSearchFullScreenInner,
  StyledSearchGroup,
  StyledSearchInput,
  StyledSearchPrefixIcon,
  StyledSearchSufixIcon,
} from './style'

export interface SearchProps extends ComponentProps<typeof StyledSearchContainer> {}

export const Search = ({ ...props }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleOpen = () => {
    setIsOpen(true)
    window.location.hash = '#search'
  }

  const handleClose = () => {
    setIsOpen(false)
    window.location.hash = ''
  }

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }

  const hashChangeHandler = useCallback(() => {
    if (window.location.hash === '#search') {
      handleOpen()
    } else {
      handleClose()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler)

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [hashChangeHandler])

  return (
    <StyledSearchContainer {...props}>
      <StyledSearchGroup data-is-open={isOpen}>
        {isOpen ? (
          <StyledCloseSearch onClick={handleClose}>
            <CloseCircle size={18} />
          </StyledCloseSearch>
        ) : (
          <StyledSearchPrefixIcon>
            <SearchNormal1 size={18} />
          </StyledSearchPrefixIcon>
        )}

        <StyledSearchInput
          type="search"
          placeholder="Busque por oportunidades, empresas..."
          onFocus={handleOpen}
          defaultValue={searchTerm}
          onChange={handleChange}
        />
        <StyledSearchSufixIcon>
          <Setting4 size={16} />
        </StyledSearchSufixIcon>
      </StyledSearchGroup>

      {isOpen && (
        <StyledSearchFullScreen>
          <StyledAreaSearchGroup />

          <StyledSearchFullScreenInner>
            <h3>Sugestões pra você</h3>
          </StyledSearchFullScreenInner>
        </StyledSearchFullScreen>
      )}
    </StyledSearchContainer>
  )
}
