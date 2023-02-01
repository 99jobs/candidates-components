import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { Drawer } from '.'
import { DrawerFooter } from '../DrawerFooter'
import { NavMenu } from '../NavMenu'
import { NavMenuList } from '../NavMenuList'
import { NavMenuListItem } from '../NavMenuListItem'
import { NavMenuListLink } from '../NavMenuListLink'

export default {
  title: 'Components/Layout/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [current, setCurrent] = useState('1')

  return (
    <Drawer {...args}>
      <NavMenu>
        <NavMenuList>
          <NavMenuListItem>
            <NavMenuListLink active={current === '1'} onClick={() => setCurrent('1')}>
              Empresas
            </NavMenuListLink>
          </NavMenuListItem>
        </NavMenuList>

        <NavMenuList>
          <h1>Recrutadores</h1>
          <NavMenuListItem>
            <NavMenuListLink active={current === '2'} onClick={() => setCurrent('2')}>
              Eleven
            </NavMenuListLink>
          </NavMenuListItem>

          <NavMenuListItem>
            <NavMenuListLink active={current === '3'} onClick={() => setCurrent('3')}>
              Nativeland
            </NavMenuListLink>
          </NavMenuListItem>
        </NavMenuList>

        <NavMenuList>
          <h1>Saiba mais</h1>
          <NavMenuListItem>
            <NavMenuListLink active={current === '4'} onClick={() => setCurrent('4')}>
              A 99 Jobs
            </NavMenuListLink>
          </NavMenuListItem>

          <NavMenuListItem>
            <NavMenuListLink active={current === '5'} onClick={() => setCurrent('5')}>
              Inquietaria
            </NavMenuListLink>
          </NavMenuListItem>

          <NavMenuListItem>
            <NavMenuListLink active={current === '6'} onClick={() => setCurrent('6')}>
              Manifesto
            </NavMenuListLink>
          </NavMenuListItem>

          <NavMenuListItem>
            <NavMenuListLink active={current === '6'} onClick={() => setCurrent('6')}>
              Seja 99ner
            </NavMenuListLink>
          </NavMenuListItem>
        </NavMenuList>

        <NavMenuList>
          <NavMenuListItem>
            <NavMenuListLink active={current === '7'} onClick={() => setCurrent('7')}>
              Precisa de ajuda?
            </NavMenuListLink>
          </NavMenuListItem>

          <NavMenuListItem>
            <NavMenuListLink active={current === '8'} onClick={() => setCurrent('8')}>
              Termos de Uso
            </NavMenuListLink>
          </NavMenuListItem>

          <NavMenuListItem>
            <NavMenuListLink active={current === '9'} onClick={() => setCurrent('9')}>
              LGPD
            </NavMenuListLink>
          </NavMenuListItem>
        </NavMenuList>
      </NavMenu>

      <DrawerFooter />
    </Drawer>
  )
}

export const Default = Template.bind({})
Default.args = {}
