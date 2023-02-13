import { expect } from '@storybook/jest'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Android, BrushBig, GlobalSearch, Teacher, Tether, Woman } from 'iconsax-react'
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
        <TabBarItem value="tab1" label="Estágio" icon={<Teacher />} />
        <TabBarItem value="tab2" label="Trainee" icon={<Tether />} />
        <TabBarItem value="tab3" label="Remoto" icon={<GlobalSearch />} />
        <TabBarItem value="tab4" label="Tech" icon={<Android />} />
        <TabBarItem value="tab5" label="+ Mulheres" icon={<Woman />} />
        <TabBarItem value="tab6" label="Coleção com nome grande" icon={<BrushBig />} />
      </TabBarItems>
      <TabBarContent value="tab1">Tab one content</TabBarContent>
      <TabBarContent value="tab2">Tab two content</TabBarContent>
      <TabBarContent value="tab3">Tab three content</TabBarContent>
      <TabBarContent value="tab4">Tab four content</TabBarContent>
      <TabBarContent value="tab5">Tab five content</TabBarContent>
      <TabBarContent value="tab6">Tab six content</TabBarContent>
    </>
  ),
}

export const Loading = Template.bind({})
Loading.args = {
  defaultValue: '',
  isLoading: true,
}

export const Testing = Template.bind({})
Testing.args = {
  defaultValue: 'tab2',
  children: (
    <>
      <TabBarItems aria-label="tabs example">
        <TabBarItem value="tab1" label="Estágio" icon={<Teacher />} />
        <TabBarItem value="tab2" label="Trainee" icon={<Tether />} />
        <TabBarItem value="tab3" label="Remoto" icon={<GlobalSearch />} />
        <TabBarItem value="tab4" label="Tech" icon={<Android />} />
        <TabBarItem value="tab5" label="+ Mulheres" icon={<Woman />} />
        <TabBarItem value="tab6" label="Coleção com nome grande" icon={<BrushBig />} />
      </TabBarItems>
      <TabBarContent value="tab1">Tab one content</TabBarContent>
      <TabBarContent value="tab2">Tab two content</TabBarContent>
      <TabBarContent value="tab3">Tab three content</TabBarContent>
      <TabBarContent value="tab4">Tab four content</TabBarContent>
      <TabBarContent value="tab5">Tab five content</TabBarContent>
      <TabBarContent value="tab6">Tab six content</TabBarContent>
    </>
  ),
}

Testing.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await new Promise((r) => setTimeout(r, 1000))

  // Testa se as 6 tabs estão na tela
  expect(canvas.getAllByRole('tab')).toHaveLength(6)

  // Testa se a tab inicial selecionada é a tab2
  expect(canvas.getAllByRole('tab')[1]).toHaveAttribute('aria-selected', 'true')

  // Testa se o conteúdo da tab2 está visível
  expect(canvas.queryByRole('tabpanel')).toHaveTextContent('Tab two content')

  // Testa se ao clicar em outra tab (última), o content muda
  userEvent.click(canvas.getAllByRole('tab')[3])
  await new Promise((r) => setTimeout(r, 300))
  expect(canvas.queryByRole('tabpanel')).toHaveTextContent('Tab four content')
}
