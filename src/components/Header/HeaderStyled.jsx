import styled from 'styled-components';

export const HeaderStyled = styled.div`
  width: 100%;
  height: 70px;
  line-height: 70px;
  vertical-align: middle;
`;

HeaderStyled.inline = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavBarStyled = styled.ul`
  display: flex;
  max-width: 1440px;
  width: 100%;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
  align-items: center;
`;

NavBarStyled.navItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
`;
