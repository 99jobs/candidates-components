import { type ComponentProps } from '@stitches/react';
import { type ReactNode } from 'react';
import { StyledActions, StyledBackButton, StyledTitle, StyledTopNavigationBarContainer } from './style';

export interface TopNavigationBarProps extends ComponentProps<typeof StyledTopNavigationBarContainer>{
  /**
   * O título do TopNavigationBar
   */
  title?: string;
  backButton?: ReactNode;
  actionButtons?: ReactNode;
};

export const TopNavigationBar = ({title, backButton, actionButtons, ...props}: TopNavigationBarProps) => (
  <StyledTopNavigationBarContainer {...props}>
    <StyledBackButton>
      {backButton}
    </StyledBackButton>
    <StyledTitle>
      {title}
    </StyledTitle>
    <StyledActions>
      {actionButtons}
    </StyledActions>
  </StyledTopNavigationBarContainer>
)