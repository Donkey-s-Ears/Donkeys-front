import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 50px 350px;
  background-color: ${({ theme }) => theme.form.bgColor};
`;
