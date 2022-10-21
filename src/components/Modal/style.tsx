import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../configs/stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateY(20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const StyledModalRoot = styled(Dialog.Root)

export const StyledModalTrigger = styled(Dialog.Trigger)

export const StyledModalPortal = styled(Dialog.Portal)

export const StyledModalContent = styled(Dialog.Content, {
  width: '100%',
  maxWidth: 420,
  borderRadius: '$xlg',
  backgroundColor: '$onGray',
  display: 'flex',
  flexDirection: 'column',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms ease-in-out`,
  },
  '&:focus': { outline: 'none' },
})

export const StyledModalHeader = styled('header', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 18px 16px 24px',
  background: 'inherit',
  borderTopLeftRadius: 'inherit',
  borderTopRightRadius: 'inherit',
})

export const StyledModalBody = styled('div', {
  width: '100%',
  paddingX: 24,
  paddingBottom: 24,
})

export const StyledModalFooter = styled('footer', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 12,
  paddingX: 24,
  paddingBottom: 24,
})

export const StyledModalTitle = styled(Dialog.Title, {
  fontSize: '$h3',
  color: '$bluePrimary',
})

export const StyledModalClose = styled(Dialog.Close, {
  padding: 0,
  background: 'transparent',
  border: 0,
  color: '$bluePrimary',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledModalOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(77, 80, 86, 0.6)',
  position: 'fixed',
  inset: 0,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: 24,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms ease-in-out`,
  },

  defaultVariants: {
    scroll: 'inside',
  },

  variants: {
    scroll: {
      inside: {
        alignItems: 'center',
        [`& ${StyledModalContent}`]: {
          maxHeight: 'calc(100vh - 24px - 24px)',
          [`& ${StyledModalBody}`]: {
            maxHeight: '100%',
            overflowY: 'auto',
            paddingBottom: 0,
          },
          [`& ${StyledModalFooter}`]: {
            paddingTop: 16,
          },
        },
      },
      body: {
        overflowY: 'auto',
        [`& ${StyledModalContent}`]: {},
      },
    },
  },
})
