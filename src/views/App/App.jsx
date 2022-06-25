import { MainWrapper } from './App.styled';
import About from '../../components/About/About';
import VideoContent from '../../components/VideoContent/VideoContent';
import ImageContent from '../../components/ImageContent/ImageContent';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <MainWrapper>
      <About />
      <VideoContent />
      <ImageContent />
      <ImageSlider slides={SliderData} />
      <Footer />
    </MainWrapper>
  );
}

export default App;
