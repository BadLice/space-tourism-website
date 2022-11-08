import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Nav1, Nav2 } from 'Typography';

type IndicatorProps = {
	$currentPath: number;
	$previousPath: number;
};

const Container = styled.div`
	height: 15%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	padding-top: 40px;
`;

const NavContainer = styled.div`
	height: 100%;
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(40.7742px);
	padding-left: 5%;
`;

const List = styled.ul`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	padding-left: 5%;
`;

const Item = styled.li`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	height: 100%;
	width: 17%;
	text-align: center;
`;

const IndicatorContainer = styled.div`
	height: 1px;
	width: 100%;
	padding-left: 5%;
	align-self: flex-start;
	display: flex;
	flex-direction: row;
	justify-content: left;
`;

const slide = ({ $currentPath, $previousPath }: IndicatorProps) => keyframes`
	0%{
		margin-left: ${$previousPath * 17}%; 
	}
	70% {
		margin-left: ${$currentPath * 17 + ($previousPath > $currentPath ? -1 : 1)}%; 
	}
	90% {
		margin-left: ${$currentPath * 17 + ($previousPath > $currentPath ? 1 : -1)}%; 
	}
	100%  {
		margin-left: ${$currentPath * 17}%; 
	}
`;

const Indicator = styled.div<IndicatorProps>`
	height: 1px;
	background-color: white;
	width: 17%;
	margin-left: ${({ $currentPath }) => $currentPath * 17}%;
	animation: ${(props) => slide(props)} 0.2s ease-in;
`;

const NavButton = styled.a`
	display: flex;
	text-decoration: none;
	text-transform: uppercase;
	justify-content: center;
	align-items: center;
`;

const LogoContainer = styled.div`
	position: relative;
	display: inline;
	height: 100%;
	width: 40%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const LogoWrapper = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const Logo = styled.div`
	border-radius: 50%;
	height: 48px;
	width: 48px;
	background-image: url('./assets/shared/logo.svg');
`;

const Line = styled.div`
	position: absolute;
	left: 30%;
	width: 75%;
	height: 1px;
	background: #ffffff;
	mix-blend-mode: normal;
	opacity: 0.25;
	z-index: 10;
`;

type NavBarProps = {
	path: number;
	setPath: React.Dispatch<React.SetStateAction<number>>;
};

const NavBar = ({ path, setPath }: NavBarProps) => {
	const [previousPath, setPreviousPath] = useState(0);

	const handleClickNav = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, p: number) => {
		e.preventDefault();
		setPreviousPath(path);
		setPath(p);
	};

	return (
		<Container>
			<LogoContainer>
				<LogoWrapper>
					<Logo></Logo>
				</LogoWrapper>
				<Line></Line>
			</LogoContainer>
			<NavContainer>
				<List>
					<Item onClick={(e) => handleClickNav(e, 0)}>
						<NavButton href='/'>
							<Nav2>00</Nav2>
							<Nav1>Home</Nav1>
						</NavButton>
					</Item>
					<Item onClick={(e) => handleClickNav(e, 1)}>
						<NavButton href='/'>
							<Nav2>01</Nav2>
							<Nav1>Destination</Nav1>
						</NavButton>
					</Item>
					<Item onClick={(e) => handleClickNav(e, 2)}>
						<NavButton href='/'>
							<Nav2>02</Nav2>
							<Nav1>Crew</Nav1>
						</NavButton>
					</Item>
					<Item onClick={(e) => handleClickNav(e, 3)}>
						<NavButton href='/'>
							<Nav2>03</Nav2>
							<Nav1>Technology</Nav1>
						</NavButton>
					</Item>
				</List>
				<IndicatorContainer>
					<Indicator $currentPath={path} $previousPath={previousPath} />
				</IndicatorContainer>
			</NavContainer>
		</Container>
	);
};

export default NavBar;
