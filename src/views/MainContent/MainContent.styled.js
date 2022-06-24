import styled from 'styled-components';
import okiBG from '../../assets/image/okiBG.jpg';

export const MainWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 0.5fr;
  grid-template-rows: 45% 45% 10%;
  position: fixed;
  height: 80%;
  width: 80%;
  background-color: rgba(250, 250, 255, 0.7);
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 15px;
  background-color: red;
`;

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Alias = styled.h1`
  font-size: 48px;
  font-weight: normal;
  letter-spacing: 1px;
`;

export const Name = styled.p`
  font-size: 24px;
  letter-spacing: 2px;
`;

export const NewAlbum = styled.div`
  background-image: url(${okiBG});
  background-size: cover;
`;

export const PhotoDiv = styled.img`
  grid-column: 3;
  grid-row: 1/3;
`;

export const Idk1 = styled.div`
  background-color: pink;
`;

export const Idk2 = styled.div`
  background-color: yellow;
`;

export const Footer = styled.div`
  grid-column: 1/4;
  grid-row: 3;
  background-color: blue;
`;
