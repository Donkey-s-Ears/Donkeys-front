import PageContextStyled from '../components/PageContext/PageContext.styled.jsx';
import FindPassword from '../components/FindPassword/FindPassword.jsx';

const FindPasswordPage = () => {
  console.log('FindPasswordPage');
  return (
    <div>
      <PageContextStyled>비밀번호 찾기 문구</PageContextStyled>
      <FindPassword></FindPassword>
    </div>
  );
};

export default FindPasswordPage;
