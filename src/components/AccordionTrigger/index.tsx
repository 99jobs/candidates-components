import { type ComponentProps } from '@stitches/react'
import { ArrowDown2 } from 'iconsax-react'
import { StyledAccordionTrigger } from './style'

export interface AccordionTriggerProps extends ComponentProps<typeof StyledAccordionTrigger> {
  /**
   * Indica se é para exibir o ícone de seta
   */
  showArrowIcon?: boolean
}

export const AccordionTrigger = ({ showArrowIcon = true, ...props }: AccordionTriggerProps) => (
  <StyledAccordionTrigger {...props}>
    {props.children}

    {showArrowIcon && <ArrowDown2 className="AccordionChevron" aria-hidden />}
  </StyledAccordionTrigger>
)
