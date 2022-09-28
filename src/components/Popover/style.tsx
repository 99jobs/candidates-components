import * as PopoverPrimitive from '@radix-ui/react-popover'
import { styled } from '../../configs/stitches.config'

export const PopoverRoot = PopoverPrimitive.Root

export const PopoverTrigger = PopoverPrimitive.Trigger

export const PopoverPortal = PopoverPrimitive.Portal

export const PopoverContent = styled(PopoverPrimitive.Content, {
  width: 260,
  borderRadius: '$md',
  border: '2px solid #000',
  padding: 15,
})

export const PopoverClose = PopoverPrimitive.Close

export const PopoverArrow = PopoverPrimitive.Arrow
