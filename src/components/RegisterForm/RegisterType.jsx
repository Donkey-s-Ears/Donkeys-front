import RegisterTypeStyled from './RegisterType.Styled.jsx';

const RegisterType = ({ setIsActive }) => {
  const onClickHandler = () => {
    setIsActive(true);
  };
  return (
    <RegisterTypeStyled>
      <RegisterTypeStyled.Top>
        회원가입
        <RegisterTypeStyled.exitButton onClick={onClickHandler}>X</RegisterTypeStyled.exitButton>
      </RegisterTypeStyled.Top>
      <RegisterTypeStyled.middle>
        이메일 회원가입
        <RegisterTypeStyled.button onClick={onClickHandler}>회원가입</RegisterTypeStyled.button>
      </RegisterTypeStyled.middle>
      <RegisterTypeStyled.bottom>
        <div>SNS 계정으로 회원가입</div>
      </RegisterTypeStyled.bottom>
    </RegisterTypeStyled>
  );
};

export default RegisterType;
