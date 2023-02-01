import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Discover, Heart, Menu, Notification } from 'iconsax-react'
import { useState } from 'react'
import { BottomBar } from '.'
import { BottomBarList } from '../BottomBarList'
import { BottomBarListItem } from '../BottomBarListItem'
import { BottomBarListLink } from '../BottomBarListLink'

export default {
  title: 'Components/Layout/BottomBar',
  component: BottomBar,
} as ComponentMeta<typeof BottomBar>

const Template: ComponentStory<typeof BottomBar> = (args) => {
  const [current, setCurrent] = useState('1')

  return (
    <BottomBar {...args}>
      <BottomBarList>
        <BottomBarListItem>
          <BottomBarListLink active={current === '1'} onClick={() => setCurrent('1')}>
            <Discover variant={current === '1' ? 'Bold' : 'Linear'} />
            Descobrir
          </BottomBarListLink>
        </BottomBarListItem>

        <BottomBarListItem>
          <BottomBarListLink active={current === '2'} onClick={() => setCurrent('2')}>
            <Heart variant={current === '2' ? 'Bold' : 'Linear'} />
            Favoritos
          </BottomBarListLink>
        </BottomBarListItem>

        <BottomBarListItem>
          <BottomBarListLink active={current === '3'} onClick={() => setCurrent('3')}>
            <Menu variant={current === '3' ? 'Bold' : 'Linear'} />
            Menu
          </BottomBarListLink>
        </BottomBarListItem>

        <BottomBarListItem>
          <BottomBarListLink
            active={current === '4'}
            onClick={() => setCurrent('4')}
            hasNotification
          >
            <Notification variant={current === '4' ? 'Bold' : 'Linear'} />
            Notificação
          </BottomBarListLink>
        </BottomBarListItem>
      </BottomBarList>
    </BottomBar>
  )
}

export const Default = Template.bind({})
Default.args = {}
