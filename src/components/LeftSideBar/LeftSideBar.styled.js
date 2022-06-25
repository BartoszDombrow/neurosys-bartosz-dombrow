import styled from 'styled-components';
import okiBG from '../../assets/image/okiBG.jpg';

export const Content = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50%;
  background-image: url(${okiBG});
  background-size: cover;
  transition: 0.3s ease-in-out;
  z-index: 10000000000;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
