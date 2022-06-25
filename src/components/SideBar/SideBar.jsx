import React from 'react';
import { Content, Form } from './SideBar.styled';

function SideBar({ isOpen, toggle }) {
  return (
    <Content isOpen={isOpen} onClick={toggle}>
      <Form></Form>
    </Content>
  );
}

export default SideBar;
