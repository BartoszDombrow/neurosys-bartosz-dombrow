import React from 'react';
import {
  MainWrapper,
  AboutDiv,
  NewAlbum,
  PhotoDiv,
  Idk1,
  Idk2,
  Footer,
  Alias,
  Name,
} from './MainContent.styled';

import okiIMG from '../../assets/image/oki.jpg';

function MainContent() {
  return (
    <MainWrapper>
      <AboutDiv>
        <Alias>OKI</Alias>
        <Name>Oskar Kamiński</Name>
      </AboutDiv>
      <NewAlbum />
      <PhotoDiv src={okiIMG} />
      <Idk1 />
      <Idk2 />
      <Footer />
    </MainWrapper>
  );
}

export default MainContent;
