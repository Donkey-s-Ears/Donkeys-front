import { MainInfoBackStyled } from './MainInfoStyled.jsx';
import MatchingButton from '../MatchingButton/MatchingButton.jsx';
import GuideButton from '../GuideButton/GuideButton.jsx';

const MainInfo = () => (
  <MainInfoBackStyled>
    <MatchingButton />
    <GuideButton />
  </MainInfoBackStyled>
);

export default MainInfo;
