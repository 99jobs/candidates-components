import * as PrimitiveAccordion from '@radix-ui/react-accordion'
import { keyframes, styled } from '../../configs/stitches.config'

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const StyledAccordionContent = styled(PrimitiveAccordion.Content, {
  color: '$gray',
  fontSize: '$body',
  fontWeight: 400,
  overflow: 'hidden',

  "&[data-state='open']": {
    animation: `${slideDown} 300ms ease-out`,
  },

  "&[data-state='closed']": {
    animation: `${slideUp} 300ms ease-out`,
  },
})
