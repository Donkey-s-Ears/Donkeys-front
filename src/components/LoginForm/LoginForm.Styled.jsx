import styled from 'styled-components';
import { FormStyled } from '../../styled/form.styled';

const LoginFormStyled = styled(FormStyled)`
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
