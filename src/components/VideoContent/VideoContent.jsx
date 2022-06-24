import React from 'react';
import { Content, Video } from './VideoContent.styled';
import videoBG from '../../assets/video/videoBG.mp4';

function VideoContent() {
  return (
    <Content>
      <Video src={videoBG} autoPlay loop muted />
    </Content>
  );
}

export default VideoContent;
