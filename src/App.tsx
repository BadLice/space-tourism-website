import Crew from 'crew/Crew';
import Destination from 'destination/Destination';
import Home from 'home/Home';
import NavBar from 'NavBar';
import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Technology from 'technology/Technology';

const backgrounds = [
	'./assets/home/background-home-desktop.jpg',
	'./assets/destination/background-destination-desktop.jpg',
	'./assets/crew/background-crew-desktop.jpg',
	'./assets/technology/background-technology-desktop.jpg',
];

const GlobalStyle = createGlobalStyle<{ $imgUrls: Array<string> }>`
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

  /* used to preload images before rendering */
  body::after{
   position:absolute; width:0; height:0; overflow:hidden; z-index:-1; // hide images
   content:${({ $imgUrls }) =>
		$imgUrls.map((path) => `url(${path})`).join(' ')};   // load images
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

//TODO: responsive

const App = () => {
	const [path, setPath] = useState(Number(sessionStorage.getItem('path')) || 0);

	useEffect(() => {
		sessionStorage.setItem('path', '' + path);
	}, [path]);

	return (
		<>
			<GlobalStyle $imgUrls={backgrounds} />
			<BackGround $url={backgrounds[path]}>
				<Column>
					<NavBar path={path} setPath={setPath} />
					{path === 0 && <Home setPath={setPath} />}
					{path === 1 && <Destination />}
					{path === 2 && <Crew />}
					{path === 3 && <Technology />}
				</Column>
			</BackGround>
		</>
	);
};

export default App;
