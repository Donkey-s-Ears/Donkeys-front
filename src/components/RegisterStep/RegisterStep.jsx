import RegisterStepStyled from './RegisterStep.Styled.jsx';

const RegisterStep = () => {
  return (
    <RegisterStepStyled>
      <RegisterStepStyled.Step>
        <div>1단계</div>
        <div>기본정보입력</div>
      </RegisterStepStyled.Step>
      <RegisterStepStyled.Step>
        <div>2단계</div>
        <div>이메일인증</div>
      </RegisterStepStyled.Step>
    </RegisterStepStyled>
  );
};

export default RegisterStep;
