import { type ComponentProps } from '@stitches/react'
import { StyledAccordionHeader } from './style'

export interface AccordionHeaderProps extends ComponentProps<typeof StyledAccordionHeader> {}

export const AccordionHeader = ({ ...props }: AccordionHeaderProps) => (
  <StyledAccordionHeader {...props} />
)
