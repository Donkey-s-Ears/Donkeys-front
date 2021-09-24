import { MainInfoBackStyled } from './MainInfoStyled.jsx';
import MatchingButton from '../MatchingButton/MatchingButton.jsx';
import GuideButton from '../GuideButton/GuideButton.jsx';

const MainInfo = ({ setIsActive }) => {
  return (
    <MainInfoBackStyled>
      <MatchingButton setIsActive={setIsActive} />
      <GuideButton />
    </MainInfoBackStyled>
  );
};

export default MainInfo;
