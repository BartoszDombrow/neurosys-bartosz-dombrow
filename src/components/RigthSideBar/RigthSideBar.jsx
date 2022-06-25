import React, { useState, useEffect } from 'react';
import {
  Content,
  Form,
  SideBarDivHeader,
  SideBarHeader,
  FormName,
  FormEmail,
  FormText,
  ExitCross,
  Paragraph,
  Button,
  CheckBox,
  ConfirmDiv,
  QuestionHeader,
  AnswerButton,
} from './RigthSideBar.styled';

import { QuestionsData } from './QuestionsData';

function RigthSideBar({ isOpen, toggle, isVisable, changeVisable }) {
  const initialValues = { username: '', email: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = 'Proszę uzupełnić pole!';
    }
    if (!values.email) {
      errors.email = 'Proszę uzupełnić pole!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Podany tekst nie jeste emailem';
    }
    if (!values.message) {
      errors.message = 'Proszę uzupełnić pole!';
    }

    return errors;
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect === false) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < QuestionsData.length) {
        setCurrentQuestion(nextQuestion);
      }
    } else if (isCorrect === true) {
      changeVisable();
    }
  };

  return (
    <Content isOpen={isOpen}>
      <ExitCross onClick={toggle} />
      <SideBarDivHeader>
        <SideBarHeader>Skontatkuj się z nami!</SideBarHeader>
      </SideBarDivHeader>
      <Form onSubmit={handleSubmit} isVisable={isVisable}>
        <FormName
          placeholder="Wpisz swoje imie"
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        <Paragraph>{formErrors.username}</Paragraph>
        <FormEmail
          placeholder="Wpisz swój email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <Paragraph>{formErrors.email}</Paragraph>
        <FormText
          placeholder="Wpisz swoją wiadomość"
          type="text"
          name="message"
          value={formValues.message}
          onChange={handleChange}
        />
        <Paragraph>{formErrors.message}</Paragraph>
        <CheckBox type="checkbox" required onClick={changeVisable} />
        <Button>Wyślij wiadomość!</Button>
      </Form>
      <ConfirmDiv isVisable={isVisable}>
        <QuestionHeader>{QuestionsData[currentQuestion].question}</QuestionHeader>
        {QuestionsData[currentQuestion].answerOptions.map((answerOption) => (
          <AnswerButton onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
            {answerOption.answerText}
          </AnswerButton>
        ))}
      </ConfirmDiv>
    </Content>
  );
}

export default RigthSideBar;
