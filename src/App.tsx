import Crew from 'crew/Crew';
import Destination from 'destination/Destination';
import Home from 'home/Home';
import NavBar from 'NavBar';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Technology from 'technology/Technology';

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

const BackGround = styled.div<{ $url: string }>`
	background-image: url(${({ $url }) => $url});
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin: 0;
	transition: all 1s linear;
`;

const Column = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
`;

const App = () => {
	const [path, setPath] = React.useState(0);

	const backgrounds = [
		'./assets/home/background-home-desktop.jpg',
		'./assets/destination/background-destination-desktop.jpg',
		'./assets/crew/background-crew-desktop.jpg',
		'./assets/technology/background-technology-desktop.jpg',
	];

	return (
		<>
			<GlobalStyle />
			<BackGround $url={backgrounds[path]}>
				<Column>
					<NavBar path={path} setPath={setPath} />
					{path === 0 && <Home />}
					{path === 1 && <Destination />}
					{path === 2 && <Crew />}
					{path === 3 && <Technology />}
				</Column>
			</BackGround>
		</>
	);
};

export default App;
