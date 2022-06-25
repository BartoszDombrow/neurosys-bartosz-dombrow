import styled from 'styled-components';

export const Content = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  background-color: rgba(37, 38, 39, 0.99);
  transition: 0.3s ease-in-out;
  z-index: 10000000000;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Form = styled.div``;
