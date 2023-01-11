import { ReactElement } from 'react'
import { Carousel as Slider } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export interface CarouselProps {
  children: ReactElement[]
}

export const Carousel = ({ children, ...props }: CarouselProps) => (
  <Slider emulateTouch swipeable showThumbs={false} {...props}>
    {children}
  </Slider>
)
