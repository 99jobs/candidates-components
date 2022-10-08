import { type ComponentProps } from 'react'
import {
  StyledModalClose,
  StyledModalContent,
  StyledModalDescription,
  StyledModalOverlay,
  StyledModalPortal,
  StyledModalRoot,
  StyledModalTitle,
} from './style'

export interface ModalProps extends ComponentProps<typeof StyledModalRoot> {
  closeOnClickOutside: boolean
}

export const Modal = ({
  children,
  open,
  onOpenChange,
  closeOnClickOutside = false,
  ...props
}: ModalProps) => (
  <StyledModalRoot {...props} open={open} onOpenChange={onOpenChange}>
    <StyledModalPortal>
      <StyledModalOverlay />

      <StyledModalContent onPointerDownOutside={(e) => !closeOnClickOutside && e.preventDefault()}>
        <StyledModalTitle />
        <StyledModalDescription />
        <StyledModalClose>x</StyledModalClose>

        {children}
      </StyledModalContent>
    </StyledModalPortal>
  </StyledModalRoot>
)
