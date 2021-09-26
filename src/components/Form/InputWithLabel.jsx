import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  line-height: 2.5rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const InputWithLabel = props => {
  return <Input {...props} />;
};

export default InputWithLabel;
