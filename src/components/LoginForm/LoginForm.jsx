import { Link } from 'react-router-dom';
import LoginFormStyled, { LoginFormGateway, SNSLogin } from './LoginForm.Styled.jsx';
import { Wrapper } from '../../styled/wrapper.styled';
import InputWithLabel from '../Form/InputWithLabel.jsx';
import FormButtonstyled from '../Form/FormButton.jsx';
import GoogleOAuth from '../OAuth/GoogleOAuth.jsx';

const LoginForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  }

  return (
    <Wrapper>
      <LoginFormStyled onSubmit={handleSubmit}>
        <InputWithLabel name="email" placeholder="이메일을 입력해주세요." type="email" required />
        <InputWithLabel name="password" placeholder="비밀번호를 입력해주세요." type="password" required />
        <FormButtonstyled type="submit">로그인</FormButtonstyled>
      </LoginFormStyled>
      <SNSLogin>
        <span>SNS 계정 간편 로그인</span>
        <GoogleOAuth />
      </SNSLogin>
      <LoginFormGateway>
        <Link to="/RegisterPage">회원가입</Link>|<Link to="/FindPasswordPage">비밀번호 찾기</Link>
      </LoginFormGateway>
    </Wrapper>
  );
};

export default LoginForm;
