import React, { useState } from 'react';
import { MainWrapper } from './App.styled';
import About from '../../components/About/About';
import VideoContent from '../../components/VideoContent/VideoContent';
import ImageContent from '../../components/ImageContent/ImageContent';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';
import Footer from '../../components/Footer/Footer';
import RigthSideBar from '../../components/RigthSideBar/RigthSideBar';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Concerts from '../../components/Concerts/Concerts';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isVisable, setIsVisable] = useState(true);

  const changeVisable = () => {
    setIsVisable(!isVisable);
  };

  return (
    <MainWrapper>
      <About />
      <VideoContent />
      <ImageContent />
      <ImageSlider slides={SliderData} />
      <Concerts />
      <RigthSideBar
        isOpen={isOpen}
        toggle={toggle}
        isVisable={isVisable}
        changeVisable={changeVisable}
      />
      <LeftSideBar isOpen={isOpen} toggle={toggle} />
      <Footer toggle={toggle} />
    </MainWrapper>
  );
}

export default App;
