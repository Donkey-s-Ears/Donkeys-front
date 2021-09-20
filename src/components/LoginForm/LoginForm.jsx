import LoginFormStyled, { LoginWrapper } from './LoginForm.Styled.jsx';
import InputWithLabel from './InputWithLabel.jsx';
import LoginButton from './LoginButton.jsx';

const LoginForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  }

  return (
    <LoginWrapper>
      <LoginFormStyled onSubmit={handleSubmit}>
        <InputWithLabel name="email" placeholder="이메일을 입력해주세요." />
        <InputWithLabel name="password" placeholder="비밀번호를 입력해주세요." type="password" />
        <LoginButton type="submit" />
      </LoginFormStyled>
    </LoginWrapper>
  );
};

export default LoginForm;
