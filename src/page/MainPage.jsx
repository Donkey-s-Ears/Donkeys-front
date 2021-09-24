import { useState } from 'react';
import MainInfo from '../components/MainInfo/MainInfo.jsx';
import Modal from '../components/Modal/Modal.jsx';
import MatchingContext from '../components/MatchingContext/MatchingContext.jsx';

const MainPage = () => {
  const [isActive, setIsActive] = useState(true);
  console.log('MainPage');
  return (
    <>
      <MainInfo setIsActive={setIsActive} />
      <Modal ModalContext={MatchingContext} isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default MainPage;
