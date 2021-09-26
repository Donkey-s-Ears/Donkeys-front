import styled from 'styled-components';

export const ButtonStyled = styled.button`
  height: 55px;
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 55px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
`;
