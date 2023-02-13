import { Carousel as Slider, CarouselProps as SliderProps } from 'react-responsive-carousel'
import { StyledCarouselWrapper } from './style'

export interface CarouselProps extends Partial<SliderProps> {}

export const Carousel = ({ ...props }: CarouselProps) => (
  <StyledCarouselWrapper>
    <Slider
      emulateTouch
      swipeable
      showThumbs={false}
      renderIndicator={(clickHandler, isSelected, index, label) => (
        <li style={{ listStyle: 'none', display: 'inline-block' }}>
          <button
            className={`dot ${isSelected ? 'selected' : ''}`}
            value={index}
            aria-label={`slide item ${label}`}
            onClick={clickHandler}
          ></button>
        </li>
      )}
      {...props}
    />
  </StyledCarouselWrapper>
)
