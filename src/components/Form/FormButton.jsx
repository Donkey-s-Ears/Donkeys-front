import styled from 'styled-components';

const FormButtonStyled = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background-color: #b68973;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);

  &:hover {
    background: #889eaf;
  }

  &:active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
  }
`;

const FormButton = props => {
  return <FormButtonStyled {...props}>로그인</FormButtonStyled>;
};

export default FormButton;
