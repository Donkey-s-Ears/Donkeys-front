import styled from 'styled-components';
import { ButtonStyled } from '../../../styled/button.styled.js';

export const MatchingButton = styled(ButtonStyled)`
  margin-top: 20px;
  padding: 0 70px;
`;

const MatchingFormStyled = styled.form`
  width: 100%;
  height: 100%;
  text-align: center;
  label {
    font-size: 1.2rem;
    margin: 0 20px;
  }
`;

export default MatchingFormStyled;
