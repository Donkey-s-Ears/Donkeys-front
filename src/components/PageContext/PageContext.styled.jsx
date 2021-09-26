import styled from 'styled-components';

const PageContextStyled = styled.div`
  width: 100%;
  height: 140px;
  line-height: 140px;
  max-width: ${({ theme }) => theme.pageMaxWidth};
  text-align: center;
  vertical-align: middle;
  font-size: 28px;
  background-color: ${({ theme }) => theme.mainColor};
  margin: auto;
`;

export default PageContextStyled;
