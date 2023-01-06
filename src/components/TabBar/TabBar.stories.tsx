import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Briefcase, Building, Like } from 'iconsax-react'
import { TabBarContent } from '../TabBarContent'
import { TabBarItem } from '../TabBarItem'
import { TabBarItems } from '../TabBarItems'
import { TabBar } from './index'

export default {
  title: 'Components/Layout/TabBar',
  component: TabBar,
} as ComponentMeta<typeof TabBar>

const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'tab2',
  children: (
    <>
      <TabBarItems aria-label="tabs example">
        <TabBarItem value="tab1" label="Novidades" icon={<Like />} />
        <TabBarItem value="tab2" label="Oportunidades" icon={<Briefcase />} />
        <TabBarItem value="tab3" label="Presencial" icon={<Building />} />
        <TabBarItem value="tab4" label="Testando nome grande xpto lalala" icon={<Building />} />
      </TabBarItems>
      <TabBarContent value="tab1">Tab one content</TabBarContent>
      <TabBarContent value="tab2">Tab two content</TabBarContent>
      <TabBarContent value="tab3">Tab three content</TabBarContent>
      <TabBarContent value="tab4">Tab four content</TabBarContent>
    </>
  ),
}

export const Loading = Template.bind({})
Loading.args = {
  defaultValue: '',
  isLoading: true,
}
