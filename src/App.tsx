import { getBackgroundsList, getCurrentBackground } from 'backgrounds';
import Crew from 'crew/Crew';
import Destination from 'destination/Destination';
import Home from 'home/Home';
import NavBar from 'NavBar';
import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Technology from 'technology/Technology';
import useMediaQuery from 'useMediaQuery';

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
		$imgUrls
			.map(
				(path) =>
					`url(${path.replace('<screen>', 'tablet')}) url(${path.replace(
						'<screen>',
						'desktop'
					)}) url(${path.replace('<screen>', 'mobile')})`
			)
			.join(' ')};   // load images
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

const Container = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
`;

//TODO: responsive

//TODO: fix indicator for tablet and mobile

//TODO: fix tabs text color and fint

//TODO: preload planets images

const App = () => {
	const [path, setPath] = useState(Number(sessionStorage.getItem('path')) || 0);
	const isTablet = useMediaQuery('(max-width: 768px)');
	const isMobile = useMediaQuery('(max-width: 375px)');

	useEffect(() => {
		sessionStorage.setItem('path', '' + path);
	}, [path]);

	return (
		<>
			<GlobalStyle $imgUrls={getBackgroundsList()} />
			<BackGround $url={getCurrentBackground(path, isTablet, isMobile)}>
				<Container>
					<NavBar path={path} setPath={setPath} />
					{path === 0 && <Home setPath={setPath} />}
					{path === 1 && <Destination />}
					{path === 2 && <Crew />}
					{path === 3 && <Technology />}
				</Container>
			</BackGround>
		</>
	);
};

export default App;
