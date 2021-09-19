import styled from 'styled-components';

export const HeaderStyled = styled.div`
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
`;
