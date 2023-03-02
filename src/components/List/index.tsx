import { type ComponentProps } from '@stitches/react'
import { StyledList } from './style'

export interface ListProps extends ComponentProps<typeof StyledList> {}

export const List = ({ ...props }: ListProps) => <StyledList {...props} />
