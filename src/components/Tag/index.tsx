import { ComponentProps } from 'react'
import { MdClose } from 'react-icons/md'
import { StyledTagContainer } from './style'

export interface TagProps extends ComponentProps<typeof StyledTagContainer> {
  /**
   * O texto da tag
   */
  label: string
  /**
   * Se a tag possui o ícone de remover
   */
  hasRemoveIcon?: boolean
}

export const Tag = ({ hasRemoveIcon = false, label, ...props }: TagProps) => (
  <StyledTagContainer {...props} data-has-remove-icon={hasRemoveIcon}>
    {label}
    {hasRemoveIcon && <MdClose />}
  </StyledTagContainer>
)
