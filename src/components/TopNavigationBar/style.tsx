import * as PrimitiveToolbar from '@radix-ui/react-toolbar'
import { styled } from '../../configs/stitches.config'

export const StyledTopNavigationBarContainer = styled(PrimitiveToolbar.Root, {
  alignItems: 'center',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'space-between',
  padding: 16,
  background: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 2,
})

export const StyledBackButton = styled('div', {
  display: 'flex',
  svg: {
    color: '$bluePrimary',
  },
})

export const StyledTitle = styled('h2', {
  flex: 1,
})

export const StyledActions = styled('div', {
  display: 'flex',
  gap: '1rem',
})
