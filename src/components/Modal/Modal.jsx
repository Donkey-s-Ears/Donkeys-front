import { useState, useEffect } from 'react';
import ModalStyled from './Modal.Styled.jsx';

const Modal = ({ ModalContext, isActive, setIsActive }) => {
  return (
    <ModalStyled isActive={isActive}>
      <ModalStyled.background />
      <ModalContext setIsActive={setIsActive} />
    </ModalStyled>
  );
};

export default Modal;
