import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Content = styled.aside`
  display: flex;
  flex-direction: column;
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
export const SideBarDivHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
`;
export const SideBarHeader = styled.h1`
  padding: 40px 20px;
  color: #fafaff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70%;
  display: ${({ isVisable }) => (isVisable ? 'flex' : 'none')};
`;

export const ExitCross = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 50px;
  width: 50px;
  color: #fafaff;
  cursor: pointer;
`;

export const FormName = styled.input`
  height: 80px;
  width: 80%;
  background-color: transparent;
  padding: 10px 10px;
  border: 1px solid #fafaff;
  border-radius: 20px;
  color: #fafaff;
`;
export const FormEmail = styled.input`
  height: 80px;
  width: 80%;
  background-color: transparent;
  padding: 10px 10px;
  border: 1px solid #fafaff;
  border-radius: 20px;
  color: #fafaff;
`;
export const FormText = styled.textarea`
  height: 300px;
  width: 80%;
  background-color: transparent;
  padding: 10px 10px;
  border: 1px solid #fafaff;
  border-radius: 20px;
  color: #fafaff;
`;

export const Paragraph = styled.p`
  color: #fafaff;
`;
export const Button = styled.button`
  height: 80px;
  width: 80%;
  margin-bottom: 20px;
  background-color: transparent;
  border: 1px solid #fafaff;
  border-radius: 20px;
  font-size: 36px;
  color: #fafaff;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fafaff;
    color: rgb(37, 38, 39);
  }
`;

export const ConfirmDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70%;
  display: ${({ isVisable }) => (isVisable ? 'none' : 'flex')};
`;

export const CheckBox = styled.input``;
export const QuestionHeader = styled.h1`
  font-size: 71px;
  color: #fafaff;
`;
export const AnswerButton = styled.button`
  height: 80px;
  width: 80%;
  margin-bottom: 20px;
  background-color: transparent;
  border: 1px solid #fafaff;
  border-radius: 20px;
  font-size: 36px;
  color: #fafaff;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fafaff;
    color: rgb(37, 38, 39);
  }
`;
