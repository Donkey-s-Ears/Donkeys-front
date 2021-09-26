import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, MyPage, RegisterPage, LoginPage, FindPasswordPage, CallPage } from './page/index.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styled/theme';

const UserDemo = {
  email: 'jkl5846@gmail.com',
  nickname: 'jongkim'
};

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
  max-width: ${({ theme }) => theme.pageMaxWidth};
  height: 100%;
  margin: auto;
`;

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Header user={UserDemo} />
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
    </ThemeProvider>
    <GlobalStyled />
  </>
);

export default App;
