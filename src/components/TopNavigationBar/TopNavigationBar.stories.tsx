import { expect } from '@storybook/jest';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { ArrowLeft2, DirectboxSend, Heart } from 'iconsax-react';
import { TopNavigationBar } from ".";
import { Button } from '../Button';

export default {
  title: 'Components/Layout/TopNavigationBar',
  component: TopNavigationBar
} as ComponentMeta<typeof TopNavigationBar>

const Template: ComponentStory<typeof TopNavigationBar> = (args) => <TopNavigationBar {...args} />

export const Default = Template.bind({});
Default.args = {
  title: 'Nome da Empresa',
  backButton: <Button color='onlyIcon' aria-label='Botão voltar' prefixIcon={<ArrowLeft2/>}/>,
  actionButtons: <>
  <Button color='onlyIcon' aria-label='Botão favoritar' prefixIcon={<Heart/>}/>
  <Button color='onlyIcon' aria-label='botão compartilhar' prefixIcon={<DirectboxSend/>}/>
  </>
}

/* Testes */
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await new Promise((r) => setTimeout(r, 1000));

  expect(canvas.getByText('Nome da Empresa')).toBeInTheDocument();
}