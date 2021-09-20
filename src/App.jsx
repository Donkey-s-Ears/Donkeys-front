import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, MyPage, RegisterPage, LoginPage, FindPasswordPage, CallPage } from './page/index.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
	* {
		margin: 0;
		box-sizing: border-box;
	}

	html, body {
		height: 100%;
		background-color: #f5f5dc;
	}

	#root {
		width: 100%;
		height: 100%;
		font-family: 'Noto Sans KR', sans-serif;
	}
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1980px;
  height: 100%;
  margin: auto;
`;

const App = () => (
  <>
    <Wrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <MainPage />}></Route>
          <Route exact path="/MyPage" render={() => <MyPage />}></Route>
          <Route exact path="/RegisterPage" render={() => <RegisterPage />}></Route>
          <Route exact path="/LoginPage" render={() => <LoginPage />}></Route>
          <Route exact path="/FindPasswordPage" render={() => <FindPasswordPage />}></Route>
          <Route exact path="/CallPage" render={() => <CallPage />}></Route>
        </Switch>
        <Footer />
      </Router>
    </Wrapper>
    <GlobalStyled />
  </>
);

export default App;
