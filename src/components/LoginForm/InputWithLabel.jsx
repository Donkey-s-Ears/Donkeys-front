import styled from 'styled-components';

const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

// const Label = styled.div`
//   font-size: 1rem;
//   margin-bottom: 0.25rem;
// `;

const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  // outline: none;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const InputWithLabel = props => (
  <Wrapper>
    <Input {...props} />
  </Wrapper>
);

export default InputWithLabel;
