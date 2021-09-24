import MatchingButtonStyled from './MatchingButton.styled.jsx';

const MatchingButton = ({ setIsActive }) => {
  const handleClick = () => {
    console.log('btnclick');
    setIsActive(false);
  };

  return <MatchingButtonStyled onClick={handleClick}>매칭 신청</MatchingButtonStyled>;
};

export default MatchingButton;
