import { useState } from 'react';
import ModalStyled from './Modal.Styled.jsx';
import RegisterType from '../RegisterForm/RegisterType.jsx';

const Modal = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <ModalStyled isActive={isActive}>
      <ModalStyled.background />
      <RegisterType setIsActive={setIsActive} />
    </ModalStyled>
  );
};

export default Modal;
