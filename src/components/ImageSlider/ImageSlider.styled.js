import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2/3;
  border: 2px solid #fafaff;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const IconLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 48px;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  color: #fafaff;
`;

export const IconRigth = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 48px;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  color: #fafaff;
`;

export const SliderDiv = styled.div``;
