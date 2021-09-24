import { useState } from 'react';

import PageContextStyled from '../components/PageContext/PageContext.styled.jsx';
import RegisterStep from '../components/RegisterStep/RegisterStep.jsx';
import RegisterForm from '../components/RegisterForm/RegisterForm.jsx';
import RegisterType from '../components/RegisterType/RegisterType.jsx';
import Modal from '../components/Modal/Modal.jsx';

const RegisterPage = () => {
  const [isActive, setIsActive] = useState(false);
  console.log('RegisterPage');
  return (
    <>
      <PageContextStyled>회원가입 페이지 문구</PageContextStyled>
      <RegisterStep />
      <RegisterForm />
      <Modal ModalContext={RegisterType} isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default RegisterPage;
