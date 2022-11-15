import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Nav1, Nav2 } from 'Typography';
import useMediaQuery from 'useMediaQuery';

type IndicatorProps = {
	$currentPath: number;
	$previousPath: number;
	$size: number;
};

const Container = styled.div`
	height: 100%;
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(40.7742px);
	padding-left: 5%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 67%;
	}
`;

const List = styled.ul`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	padding-left: 5%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		padding-left: 0;
	}
`;

const Item = styled.li`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	width: 17%;
	text-align: center;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 25%;
		text-align: left;
		align-items: left;
	}
`;

const IndicatorContainer = styled.div`
	height: 1px;
	width: 100%;
	padding-left: 5%;
	align-self: flex-start;
	display: flex;
	flex-direction: row;
	justify-content: left;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		padding-left: 0%;
	}
`;

const slide = ({ $currentPath, $previousPath, $size }: IndicatorProps) => keyframes`
	0%{
		margin-left: ${$previousPath * $size}%; 
	}
	70% {
		margin-left: ${$currentPath * $size + ($previousPath > $currentPath ? -1 : 1)}%; 
	}
	90% {
		margin-left: ${$currentPath * $size + ($previousPath > $currentPath ? 1 : -1)}%; 
	}
	100%  {
		margin-left: ${$currentPath * $size}%; 
	}
`;

const Indicator = styled.div<IndicatorProps>`
	height: 1px;
	background-color: white;
	width: ${({ $size }) => $size}%;
	margin-left: ${({ $currentPath, $size }) => $currentPath * $size}%;
	animation: ${(props) => slide(props)} 0.2s ease-in;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		height: 3px;
	}
`;

const NavButton = styled.a`
	display: flex;
	text-decoration: none;
	text-transform: uppercase;
	justify-content: center;
	align-items: center;
`;

const Index = styled(Nav2)`
	@media only screen and (max-width: 768px) and (min-width: 376px) {
		display: none;
	}
`;

const Label = styled(Nav1)`
	@media only screen and (max-width: 768px) and (min-width: 376px) {
		font-size: 14px;
		line-height: 17px;
		letter-spacing: 2.3625px;
	}
`;

type NavBarButtonsProps = {
	path: number;
	setPath: React.Dispatch<React.SetStateAction<number>>;
};

const NavBarButtons = ({ path, setPath }: NavBarButtonsProps) => {
	const [previousPath, setPreviousPath] = useState(0);

	const isTablet = useMediaQuery('(max-width: 768px)');

	let indicatorSize = isTablet ? 25 : 17;

	const handleClickNav = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, p: number) => {
		e.preventDefault();
		setPreviousPath(path);
		setPath(p);
	};

	return (
		<Container>
			<List>
				<Item onClick={(e) => handleClickNav(e, 0)}>
					<NavButton href='/'>
						<Index>00</Index>
						<Label>Home</Label>
					</NavButton>
				</Item>
				<Item onClick={(e) => handleClickNav(e, 1)}>
					<NavButton href='/'>
						<Index>01</Index>
						<Label>Destination</Label>
					</NavButton>
				</Item>
				<Item onClick={(e) => handleClickNav(e, 2)}>
					<NavButton href='/'>
						<Index>02</Index>
						<Label>Crew</Label>
					</NavButton>
				</Item>
				<Item onClick={(e) => handleClickNav(e, 3)}>
					<NavButton href='/'>
						<Index>03</Index>
						<Label>Technology</Label>
					</NavButton>
				</Item>
			</List>
			<IndicatorContainer>
				<Indicator
					$currentPath={path}
					$previousPath={previousPath}
					$size={indicatorSize}
				/>
			</IndicatorContainer>
		</Container>
	);
};

export default NavBarButtons;
