import { type ComponentProps } from '@stitches/react'
import { ArrowRight2 } from 'iconsax-react'
import { forwardRef } from 'react'
import { StyledNavMenuListLink } from './style'

export interface NavMenuListLinkProps extends ComponentProps<typeof StyledNavMenuListLink> {
  /**
   * Exibe uma seta no lado direito do link
   */
  showRightArrow?: boolean
}

export const NavMenuListLink = forwardRef<HTMLAnchorElement, NavMenuListLinkProps>(
  ({ showRightArrow = true, ...props }, ref) => (
    <StyledNavMenuListLink data-show-arrow={showRightArrow} {...props} ref={ref}>
      {props.children}
      {showRightArrow && <ArrowRight2 size={18} />}
    </StyledNavMenuListLink>
  )
)

NavMenuListLink.displayName = 'NavMenuListLink'
