import { HeaderStyled, NavBarStyled } from './HeaderStyled.jsx';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <HeaderStyled>
    {/* <HeaderStyled.inline> */}
    <nav>
      <Link to="/">logo</Link>
      <NavBarStyled>
        <NavBarStyled.navItem>nav1</NavBarStyled.navItem>
        <NavBarStyled.navItem>nav2</NavBarStyled.navItem>
        <NavBarStyled.navItem>nav3</NavBarStyled.navItem>
      </NavBarStyled>
    </nav>
    {/* </HeaderStyled.inline> */}
  </HeaderStyled>
);

export default Header;
