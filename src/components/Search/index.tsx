import { type ComponentProps } from '@stitches/react'
import { CloseCircle, SearchNormal1, Setting4 } from 'iconsax-react'
import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from 'react'
import {
  StyledCloseSearch,
  StyledSearchContainer,
  StyledSearchFullScreen,
  StyledSearchFullScreenContent,
  StyledSearchFullScreenHeader,
  StyledSearchGroup,
  StyledSearchInput,
  StyledSearchPrefixIcon,
  StyledSearchSufixIcon,
} from './style'

export interface SearchProps extends ComponentProps<typeof StyledSearchContainer> {
  /**
   * Elemento que ficará dentro do search quando estiver em full screen
   */
  children: ReactNode
}

export const Search = ({ children, ...props }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const openSearchFullScreen = () => {
    setIsOpen(true)
    setIsClosing(false)

    setTimeout(() => {
      document.body.classList.add('search-open')
    }, 500)
  }

  const closeSearchFullScreen = () => {
    setIsClosing(true)
    document.body.classList.remove('search-open')

    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 500)
  }

  const handleOpen = () => {
    window.location.hash = '#search'
    openSearchFullScreen()
  }

  const handleClose = () => {
    closeSearchFullScreen()
  }

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }

  const hashChangeHandler = useCallback(() => {
    if (window.location.hash === '#search') {
      openSearchFullScreen()
    } else {
      closeSearchFullScreen()
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
      <StyledSearchGroup>
        <StyledSearchPrefixIcon>
          <SearchNormal1 size={18} />
        </StyledSearchPrefixIcon>

        <StyledSearchInput
          type="search"
          placeholder="Busque por oportunidades, empresas..."
          onFocus={handleOpen}
          defaultValue={searchTerm}
          onChange={handleChange}
        />
        <StyledSearchSufixIcon role="none">
          <Setting4 size={16} />
        </StyledSearchSufixIcon>
      </StyledSearchGroup>

      {(isOpen || isClosing) && (
        <StyledSearchFullScreen data-state={isOpen && !isClosing ? 'open' : 'closing'}>
          <StyledSearchFullScreenHeader>
            <StyledSearchGroup>
              <StyledCloseSearch onClick={handleClose}>
                <CloseCircle size={18} />
              </StyledCloseSearch>

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
          </StyledSearchFullScreenHeader>

          <StyledSearchFullScreenContent>{children}</StyledSearchFullScreenContent>
        </StyledSearchFullScreen>
      )}
    </StyledSearchContainer>
  )
}
