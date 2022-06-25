import React, { useState } from 'react';
import { MainWrapper } from './App.styled';
import About from '../../components/About/About';
import VideoContent from '../../components/VideoContent/VideoContent';
import ImageContent from '../../components/ImageContent/ImageContent';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainWrapper>
      <About />
      <VideoContent />
      <ImageContent />
      <ImageSlider slides={SliderData} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Footer toggle={toggle} />
    </MainWrapper>
  );
}

export default App;
