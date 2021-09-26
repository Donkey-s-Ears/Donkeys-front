import { HeaderStyled, NavBarStyled, MypageDownArrow } from './HeaderStyled.jsx';
import { Link } from 'react-router-dom';

const Header = ({ user }) => {
  const navItem = () => (
    <>
      <NavBarStyled.utilItem>
        <Link to="/LoginPage">로그인</Link>
      </NavBarStyled.utilItem>
      <NavBarStyled.utilItem>
        <Link to="/RegisterPage">회원가입</Link>
      </NavBarStyled.utilItem>
    </>
  );

  const navUser = () => {
    return (
      <>
        <NavBarStyled.utilItem>{user.nickname}님</NavBarStyled.utilItem>
        <NavBarStyled.utilItem>
          <span>마이페이지</span>
          <MypageDownArrow />
        </NavBarStyled.utilItem>
      </>
    );
  };

  return (
    <HeaderStyled>
      <Link to="/">logo</Link>
      <NavBarStyled>
        <NavBarStyled.mainItem>
          <Link to="#">임시1</Link>
        </NavBarStyled.mainItem>
        <NavBarStyled.mainItem>
          <Link to="#">임시2</Link>
        </NavBarStyled.mainItem>
        <NavBarStyled.mainItem>
          <Link to="#">임시3</Link>
        </NavBarStyled.mainItem>
      </NavBarStyled>

      <NavBarStyled>{!user ? navItem() : navUser()}</NavBarStyled>
    </HeaderStyled>
  );
};

export default Header;
