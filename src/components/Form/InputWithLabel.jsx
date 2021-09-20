import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const InputWithLabel = props => {
  return (
    <Wrapper>
      <Input {...props} />
    </Wrapper>
  );
};

export default InputWithLabel;
