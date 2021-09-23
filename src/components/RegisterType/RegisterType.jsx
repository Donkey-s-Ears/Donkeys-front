import RegisterTypeStyled from './RegisterType.Styled.jsx';
import GoogleOAuth from '../OAuth/GoogleOAuth.jsx';

const RegisterType = ({ setIsActive }) => {
  const onClickHandler = () => {
    setIsActive(true);
  };
  return (
    <RegisterTypeStyled>
      <RegisterTypeStyled.Top>
        <div>회원가입</div>
        <RegisterTypeStyled.exitButton onClick={onClickHandler}>X</RegisterTypeStyled.exitButton>
      </RegisterTypeStyled.Top>
      <RegisterTypeStyled.middle>
        <div>이메일 회원가입</div>
        <RegisterTypeStyled.button onClick={onClickHandler}>회원가입</RegisterTypeStyled.button>
      </RegisterTypeStyled.middle>
      <RegisterTypeStyled.bottom>
        <div>SNS 계정으로 회원가입</div>
        <GoogleOAuth />
      </RegisterTypeStyled.bottom>
    </RegisterTypeStyled>
  );
};

export default RegisterType;
