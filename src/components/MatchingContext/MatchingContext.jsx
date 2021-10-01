import { useState } from 'react';
import MatchingContextStyled from './MatchingContext.styled.jsx';
import MatchingForm from './Form/MatchingForm.jsx';
import MatchingLoading from './Loading/MatchingLoading.jsx';
import MatchingConfirm from './Confirm/MatchingConfirm.jsx';

const MatchingContext = ({ setIsActive }) => {
  const [apply, setApply] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const onClick = () => {
    setIsActive(true);
    setApply(false);
  };

  // confirm 테스트용
  setTimeout(() => {
    setConfirm(true);
  }, 5000);

  const matchingStep = () => {
    if (confirm) return <MatchingConfirm cancleHandler={onClick} />;
    if (apply) return <MatchingLoading cancleHandler={onClick} />;
    else return <MatchingForm setApply={setApply} />;
  };

  return (
    <MatchingContextStyled>
      <MatchingContextStyled.exitButton onClick={onClick}>X</MatchingContextStyled.exitButton>
      {matchingStep()}
    </MatchingContextStyled>
  );
};

export default MatchingContext;
