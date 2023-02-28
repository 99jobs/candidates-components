import { AccordionMultipleProps, AccordionSingleProps } from '@radix-ui/react-accordion'
import { StyledAccordion } from './style'

export const Accordion = ({ ...props }: AccordionSingleProps | AccordionMultipleProps) => (
  <StyledAccordion {...props} />
)
