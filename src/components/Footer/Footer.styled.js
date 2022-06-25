import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 3/4;
  grid-column: 1/4;
  border: 2px solid #fafaff;
`;

export const Button = styled.button`
  background-color: transparent;
  justify-self: flex-end;
  margin-left: 40px;
  padding: 5px 10px;
  border: 1px solid #fafaff;
  font-size: 36px;
  color: #fafaff;
  cursor: pointer;
`;

export const FooterMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const FooterItem = styled.li`
  list-style: none;
  font-size: 24px;
  color: #fafaff;
  cursor: pointer;
`;
export const FooterIcon = styled.div`
  font-size: 28px;
  padding: 0px 10px;
`;

export const FooterLink = styled.a`
  display: flex;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: 0.3s ease-in-out;
  &:visited {
    color: #fafaff;
  }
  &:hover {
    border-bottom: 1px solid #fafaff;
  }
`;

export const FooterText = styled.p``;
