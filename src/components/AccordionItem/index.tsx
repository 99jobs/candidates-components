import { type ComponentProps } from '@stitches/react'
import { StyledAccordionItem } from './style'

export interface AccordionItemProps extends ComponentProps<typeof StyledAccordionItem> {}

export const AccordionItem = ({ ...props }: AccordionItemProps) => (
  <StyledAccordionItem {...props} />
)
