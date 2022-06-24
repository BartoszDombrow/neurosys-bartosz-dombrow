import React from 'react';
import { Content, Image } from './ImageContent.styled';
import okiIMG from '../../assets/image/oki.jpg';

function ImageContent() {
  return (
    <Content>
      <Image src={okiIMG}></Image>
    </Content>
  );
}

export default ImageContent;
