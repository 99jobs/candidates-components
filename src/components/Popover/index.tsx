import { forwardRef, ReactNode } from 'react'
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from './style'

export interface PopoverProps {
  /**
   * Elemento que vai acionar o Popover
   */
  triggerNode: ReactNode
  /**
   * Conteúdo do Popover
   */
  contentNode: ReactNode
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => (
  <PopoverRoot>
    <PopoverTrigger asChild>{props.triggerNode}</PopoverTrigger>

    <PopoverPortal>
      <PopoverContent ref={ref}>
        {props.contentNode}

        <PopoverClose />
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
))

Popover.displayName = 'Popover'
