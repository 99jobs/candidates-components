import { type ComponentProps } from '@stitches/react'
import { StyledAccordionContent } from './style'

export interface AccordionContentProps extends ComponentProps<typeof StyledAccordionContent> {}

export const AccordionContent = ({ ...props }: AccordionContentProps) => (
  <StyledAccordionContent {...props} className="AccordionContent" />
)
