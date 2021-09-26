import styled from 'styled-components';
import { DownArrow } from '../../styled/arrow.styled.js';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  line-height: 70px;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

HeaderStyled.inline = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavBarStyled = styled.ul`
  display: flex;
  max-width: 1440px;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  li:hover {
    a {
      color: orange;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

NavBarStyled.mainItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 0 25px;
`;

NavBarStyled.utilItem = styled.li`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 0 10px;
  line-height: 70px;
`;

export const MypageDownArrow = styled(DownArrow)`
  position: relative;
  left 10%;
	top: 2px;
	vertical-align: middle;
`;
