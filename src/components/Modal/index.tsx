import { type ComponentProps } from '@stitches/react'
import {
  StyledModalBody,
  StyledModalClose,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalPortal,
  StyledModalRoot,
  StyledModalTitle,
} from './style'

export interface ModalProps extends ComponentProps<typeof StyledModalRoot> {
  /**
   * Controla se a rolagem acontecerá internamente no modal**(inside)** ou acontecerá externamente**(body)**.
   * Quando é internamente, o header e o footer do modal ficam fixos na tela, rolando apenas a body.
   */
  scroll?: 'inside' | 'body'
  /**
   * Determina se o modal deve fechar quando pressionar a tecla ESC
   */
  closeOnEsc: boolean
  /**
   * Determina se o modal deve fechar quando clicar no overlay
   */
  closeOnOverlayClick: boolean
}

export const Modal = ({
  scroll = 'inside',
  closeOnEsc = true,
  closeOnOverlayClick = true,
  children,
  ...props
}: ModalProps) => (
  <StyledModalRoot {...props}>
    <StyledModalPortal>
      <StyledModalOverlay scroll={scroll}>
        <StyledModalContent
          onEscapeKeyDown={(e) => !closeOnEsc && e.preventDefault()}
          onPointerDownOutside={(e) => !closeOnOverlayClick && e.preventDefault()}
        >
          {children}
        </StyledModalContent>
      </StyledModalOverlay>
    </StyledModalPortal>
  </StyledModalRoot>
)

export const ModalHeader = StyledModalHeader
export const ModalTitle = StyledModalTitle
export const ModalClose = StyledModalClose
export const ModalBody = StyledModalBody
export const ModalFooter = StyledModalFooter
