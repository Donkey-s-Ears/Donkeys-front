import styled from 'styled-components';

const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: ${props => (props.isActive ? 'none' : 'block')};
`;

ModalStyled.background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.65;
`;

export default ModalStyled;
