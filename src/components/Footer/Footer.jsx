import { FooterStyled } from './FooterStyled.jsx';
import githubImage from '../../Assets/Images/GitHub-Mark-32px.png';

const Footer = () => {
  console.log('Footer');
  return (
    <FooterStyled>
      <a href="https://github.com/Donkey-s-Ears" target="_blank">
        <img src={githubImage} />
      </a>
    </FooterStyled>
  );
};

export default Footer;
