import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 140px;
  line-height: 140px;
  max-width: 1980px;
  text-align: center;
  vertical-align: middle;
`;

const RegisterStepStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 100%;
  max-width: 960px;
  height: 140px;
  justify-content: space-between;
`;

RegisterStepStyled.Step = styled.div`
  width: 33%;
  padding: 0 50px;
  &:before {
    content: '스텝 그림';
    height: 70px;
    float: left;
  }
`;

export default RegisterStepStyled;
