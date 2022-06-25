import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { Content, Image, IconLeft, IconRigth, SliderDiv } from './ImageSlider.styled';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const slidesLength = slides.length;

  const nextSlide = () => {
    setCurrent(current === slidesLength - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slidesLength - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Content>
      <IconLeft>
        <FaArrowAltCircleLeft onClick={prevSlide} />
      </IconLeft>
      <IconRigth>
        <FaArrowAltCircleRight onClick={nextSlide} />
      </IconRigth>
      {SliderData.map((slide, index) => {
        return (
          <SliderDiv className={index === current ? 'slide active' : 'slide'}>
            {index === current && <Image src={slide.image} />}
          </SliderDiv>
        );
      })}
    </Content>
  );
}

export default ImageSlider;
