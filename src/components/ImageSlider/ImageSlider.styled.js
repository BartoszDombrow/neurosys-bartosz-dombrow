import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/2;
  border: 2px solid #fafaff;
`;

export const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
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
