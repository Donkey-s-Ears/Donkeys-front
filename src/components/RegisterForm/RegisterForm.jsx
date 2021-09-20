import RegisterFormStyled, { Wrapper } from './RegisterForm.styled.jsx';
import InputWithLabel from '../Form/InputWithLabel.jsx';
import LoginButton from '../Form/LoginButton.jsx';
import EmailForm from '../Form/EmailForm.jsx';

const RegisterForm = () => {
  return (
    <Wrapper>
      <RegisterFormStyled>
        <EmailForm />
        <InputWithLabel name="password" placeholder="비밀번호를 입력해주세요." type="password" />
        <InputWithLabel name="nickname" placeholder="닉네임을 입력해주세요." type="text" />
        <InputWithLabel name="avarta" placeholder="아바타로 사용할 이미지를 업로드해주세요." type="file" />
        <LoginButton>회원 가입</LoginButton>
      </RegisterFormStyled>
    </Wrapper>
  );
};

export default RegisterForm;
