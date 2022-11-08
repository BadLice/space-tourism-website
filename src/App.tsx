import Home from 'home/Home';
import NavBar from 'NavBar';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,body {
    margin: 0;
    padding: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
  }
`;

const BackGround = styled.div`
	background-image: url('./assets/home/background-home-desktop.jpg');
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin: 0;
`;

const Column = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
`;

const App = () => {
	const [path, setPath] = React.useState(0);

	return (
		<>
			<GlobalStyle />
			<BackGround>
				<Column>
					<NavBar path={path} setPath={setPath} />
					{path === 0 && <Home />}
				</Column>
			</BackGround>
		</>
	);
};

export default App;
