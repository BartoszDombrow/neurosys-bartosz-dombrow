import { MainWrapper, VideoBackground } from './App.styled';
import MainContent from '../MainContent/MainContent';
import videoBG from '../../assets/video/videoBG.mp4';

function App() {
  return (
    <MainWrapper>
      <VideoBackground src={videoBG} autoPlay loop muted />
      <MainContent />
    </MainWrapper>
  );
}

export default App;
