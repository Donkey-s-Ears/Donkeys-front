import styled from 'styled-components';

const RegisterTypeStyled = styled.div`
  position: absolute;
  width: 390px;
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
`;

RegisterTypeStyled.Top = styled.div`
  position: relative;
  height: 55px;
  line-height: 55px;
  vertical-align: middle;
  padding: 0 32px;
  margin: auto;
  background-color: #f5f5f5;
  font-size: 18px;
  border-bottom: 1px solid #e0e0e0;
`;

RegisterTypeStyled.exitButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  background-color: #f5f5f5;
  cursor: pointer;
`;

RegisterTypeStyled.middle = styled.div`
  text-align: center;
  padding: 30px 0;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

RegisterTypeStyled.button = styled.button`
  margin: 20px 77px 0 77px;
  width: calc(100% - 154px);
  height: 55px;
  background-color: #c38f63;
  border-radius: 55px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
`;

RegisterTypeStyled.bottom = styled.button`
  width: 100%;
  height: 140px;
  background-color: #fff;
  border: none;
`;

export default RegisterTypeStyled;
