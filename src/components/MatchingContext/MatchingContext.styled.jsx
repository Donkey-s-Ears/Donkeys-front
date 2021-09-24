import styled from 'styled-components';

const MatchingContextStyled = styled.div`
  position: absolute;
  width: 960px;
  height: 760px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 100px;
  background-color: #f5f5f5;
`;

MatchingContextStyled.exitButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  background-color: #f5f5f5;
  cursor: pointer;
`;

export default MatchingContextStyled;
