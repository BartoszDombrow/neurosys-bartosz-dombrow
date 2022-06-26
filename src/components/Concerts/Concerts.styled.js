import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  grid-row: 2/3;
  border: 2px solid #fafaff;
  border-radius: 20px;
`;
export const ListHeader = styled.h2`
  font-size: 48;
  color: #fafaff;
`;

export const List = styled.ul``;
export const ListElement = styled.li`
  list-style: none;
  font-size: 28px;
  color: #fafaff;
  &:nth-child(1) {
    text-decoration: line-through;
  }
  &:nth-child(2) {
    text-decoration: line-through;
  }
`;
export const ListWrapper = styled.div`
  display: flex;
  padding: 20px 30px;
`;
export const ListItem = styled.p`
  padding: 0px 10px;
`;
