import { Wrapper } from '../../styled/wrapper.styled';
import { FormStyled } from '../../styled/form.styled.js';
import InputWithLabel from '../Form/InputWithLabel.jsx';

const FindPassword = () => {
  return (
    <Wrapper>
      <FormStyled>
        <div>
          <label>이메일</label>
          <InputWithLabel name="password" placeholder="가입한 이메일을 입력해주세요." type="password" required />
        </div>
      </FormStyled>
    </Wrapper>
  );
};

export default FindPassword;
