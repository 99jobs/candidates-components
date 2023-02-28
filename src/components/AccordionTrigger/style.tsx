import * as PrimitiveAccordion from '@radix-ui/react-accordion'
import { styled } from '../../configs/stitches.config'

export const StyledAccordionTrigger = styled(PrimitiveAccordion.Trigger, {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  fontWeight: 700,
  fontSize: '$h2',
  color: '$gray',
  cursor: 'pointer',

  '& > svg:first-child': {
    color: '$gray',
    marginRight: 10,
  },

  '&[data-state="open"] > .AccordionChevron': {
    transform: 'rotate(180deg)',
  },

  '.AccordionChevron': {
    transition: 'transform 300ms',
    color: '$bluePrimary',
    marginLeft: 'auto',
  },
})
