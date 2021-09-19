import { HeaderStyled, NavBarStyled } from './HeaderStyled.jsx';
import { Link } from 'react-router-dom';

const Header = () => (
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
    <NavBarStyled>
      <NavBarStyled.utilItem>
        <Link to="#">로그인</Link>
      </NavBarStyled.utilItem>
      <NavBarStyled.utilItem>
        <Link to="#">회원가입</Link>
      </NavBarStyled.utilItem>
    </NavBarStyled>
  </HeaderStyled>
);

export default Header;
