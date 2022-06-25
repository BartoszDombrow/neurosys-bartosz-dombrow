import React from 'react';
import { Content } from './LeftSideBar.styled';

function LeftSideBar({ isOpen, toggle }) {
  return (
    <>
      <Content isOpen={isOpen} />
    </>
  );
}

export default LeftSideBar;
