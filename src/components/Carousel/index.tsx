import { Carousel as Slider, CarouselProps as SliderProps } from 'react-responsive-carousel'
import { StyledCarouselWrapper } from './style'

export interface CarouselProps extends Partial<SliderProps> {}

export const Carousel = ({ ...props }: CarouselProps) => (
  <StyledCarouselWrapper>
    <Slider emulateTouch swipeable showThumbs={false} {...props} />
  </StyledCarouselWrapper>
)
