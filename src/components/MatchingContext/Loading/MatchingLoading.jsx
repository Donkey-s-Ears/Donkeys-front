import { MatchingLoadingStyled, Bubbles } from './MatchingLoading.styled.jsx';

const LoaderBubble = () => (
  <Bubbles>
    <div className="bubble" />
    <div className="bubble" />
    <div className="bubble" />
  </Bubbles>
);

const MatchingLoading = ({ cancleHandler }) => {
  const onClick = () => {
    cancleHandler(true);
  };

  return (
    <MatchingLoadingStyled>
      매칭중입니다.
      <LoaderBubble />
      <button onClick={onClick}>매칭 취소</button>
    </MatchingLoadingStyled>
  );
};

export default MatchingLoading;
