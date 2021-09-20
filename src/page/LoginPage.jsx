import PageContextStyled from '../components/PageContext/PageContext.styled.jsx';
import LoginForm from '../components/LoginForm/LoginForm.jsx';

const LoginPage = () => {
  console.log('LoginPage');
  return (
    <>
      <PageContextStyled>로그인 페이지 문구</PageContextStyled>
      <LoginForm />
    </>
  );
};

export default LoginPage;
