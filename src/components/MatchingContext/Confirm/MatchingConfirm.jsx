import MatchingConfirmStyled from './MatchingConfirm.styled.jsx';

const MatchingConfirm = ({ cancleHandler }) => {
  const onClick = async () => {
    window.location.replace('/CallPage');
  };
  return (
    <MatchingConfirmStyled>
      <div>매칭이 완료됐습니다.</div>
      <button onClick={onClick}>확인</button>
      <button onClick={cancleHandler}>취소</button>
    </MatchingConfirmStyled>
  );
};

export default MatchingConfirm;
