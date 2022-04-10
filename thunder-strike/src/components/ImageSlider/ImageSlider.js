import React, {useState} from 'react'
import {SliderData} from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Slider.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const ImageSlider = ({slides}) => {
  const [current,setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent( current === length - 1 ? 0 : current + 1 );
  }
  const prevSlide = () => {
    setCurrent( current === 0 ? length -1 : current - 1 );
  }
  if(!Array.isArray(slides) || slides.length <=0) {
    return null;
  }
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
      {slides.map(slide => {
        return(<img src={slide.image} className="sliderimg"/>)
      })}
</AliceCarousel>
    </div>
  
)
};

export default ImageSlider
