import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 50px 350px;
  background-color: ${({ theme }) => theme.form.bgColor};
`;

export const RegisterFormAvartarStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: dashed gray;
  cursor: pointer;
`;

RegisterFormAvartarStyled.context = styled.div`
  ${({ check }) => (check ? 'display: none;' : '')}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.45);
`;
