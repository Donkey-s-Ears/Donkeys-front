import { useState } from 'react';
import ModalStyled from './Modal.Styled.jsx';

const Modal = ({ ModalContext }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <ModalStyled isActive={isActive}>
      <ModalStyled.background />
      <ModalContext setIsActive={setIsActive} />
    </ModalStyled>
  );
};

export default Modal;
