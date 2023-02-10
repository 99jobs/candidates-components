import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Carousel } from '.'

export default {
  title: 'Components/Data/Carousel',
  component: Carousel,
  parameters: {
    componentSubtitle:
      'Para usar esse componente em outro projeto, é necessário importar o CSS candidates-components/node_modules/react-responsive-carousel/lib/styles/carousel.min.css nesse outro projeto também.',
  },
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args}>
    <div>
      <img
        src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
        alt="Imagem X"
      />
    </div>
    <div>
      <img
        src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
        alt="Imagem Y"
      />
    </div>
    <div>
      <img
        src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
        alt="Imagem Z"
      />
    </div>
  </Carousel>
)

export const Default = Template.bind({})
Default.args = {}
