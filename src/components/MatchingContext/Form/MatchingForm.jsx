import { useState } from 'react';
import MatchingFormStyled, { MatchingButton } from './MatchingForm.styled.jsx';

const MatchingForm = ({ setApply }) => {
  const [category, setCategory] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target.category.value); // 매칭 신청시 보낼 값
    setApply(true);
  };

  const onChange = e => {
    setCategory(e.target.value);
  };

  const checkedValue = value => {
    return category === value;
  };

  return (
    <div>
      <MatchingFormStyled onSubmit={onSubmit}>
        <h1>매칭 신청하기</h1>

        <h2>category</h2>
        <div>
          <label>
            <input type="radio" name="category" value="sad" onChange={onChange} checked={checkedValue('sad')} required />
            슬픔
          </label>

          <label>
            <input type="radio" name="category" value="happy" onChange={onChange} checked={checkedValue('happy')} required />
            기쁨
          </label>

          <label>
            <input type="radio" name="category" value="nothing" onChange={onChange} checked={checkedValue('nothing')} required />
            상관없음
          </label>
        </div>

        <MatchingButton type="submit">매칭 신청</MatchingButton>
      </MatchingFormStyled>
    </div>
  );
};

export default MatchingForm;
