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
	/* The image used */
	background-image: url('./assets/home/background-home-desktop.jpg');

	/* Full height */
	height: 100%;

	/* Center and scale the image nicely */
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin: 0;
`;

const FlexBox = styled.main`
	position: relative;
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
				<FlexBox>
					<NavBar path={path} setPath={setPath} />
				</FlexBox>
			</BackGround>
		</>
	);
};

export default App;
