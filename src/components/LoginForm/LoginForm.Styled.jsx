import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 50px 350px;
  background-color: ${({ theme }) => theme.form.bgColor};
`;

const LoginFormStyled = styled.form`
  width: 460px;
  margin-bottom: 30px;
`;

export const SNSLogin = styled.div`
  margin-bottom: 20px;
  height: 50px;
  span {
    line-height: 50px;
    vertical-align: top;
    margin: 0 55px 0 10px;
  }
`;

export const LoginFormGateway = styled.div`
  text-align: center;
  margin-top: 50px;
  a {
    margin: 30px;
    text-decoration: none;
    color: black;
  }

  a:last-child {
    margin: 30px 0 30px 30px;
  }
`;

export default LoginFormStyled;
