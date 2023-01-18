import { ComponentProps } from '@stitches/react'
import { StyledMatchAvatar } from './style'

export interface MatchAvatarProps extends ComponentProps<typeof StyledMatchAvatar> {}

export const MatchAvatar = ({ ...props }: MatchAvatarProps) => <StyledMatchAvatar {...props} />
