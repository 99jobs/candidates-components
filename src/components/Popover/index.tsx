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

export const Popover = forwardRef<HTMLElement, PopoverProps>((props) => (
  <PopoverRoot>
    <PopoverTrigger asChild>{props.triggerNode}</PopoverTrigger>

    <PopoverPortal>
      <PopoverContent>
        {props.contentNode}

        <PopoverClose />
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
))

Popover.displayName = 'Popover'
