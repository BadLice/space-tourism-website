import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Nav1, Nav2 } from 'Typography';
import useMediaQuery from 'useMediaQuery';

type IndicatorProps = {
	$currentPath: number;
	$previousPath: number;
	$size: number;
};

const FixedContainer = styled.div<{ $open: boolean }>`
	position: fixed;
	right: 0;
	bottom: 0;
	height: 100vh;
	width: 70%;
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(40.7742px);
	z-index: 10;
	display: ${({ $open }) => ($open ? 'flex' : 'none')};
`;

const FixedList = styled.ul`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-left: 15%;
	padding-top: 40%;
	gap: 3%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		padding-left: 0;
	}
`;

const FixedItem = styled.li`
	display: grid;
	flex-direction: row;
	height: 7%;
	width: 100%;
	text-align: left;

	& > a {
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

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
	isOpen?: boolean;
};

const NavBarButtons = ({ path, setPath, isOpen }: NavBarButtonsProps) => {
	const [previousPath, setPreviousPath] = useState(0);

	const isTablet = useMediaQuery('(max-width: 768px)');
	const isMobile = useMediaQuery('(max-width: 375px)');

	let indicatorSize = isTablet ? 25 : 17;

	const handleClickNav = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, p: number) => {
		e.preventDefault();
		setPreviousPath(path);
		setPath(p);
	};

	const navItems = ['Home', 'Destination', 'Crew', 'Technology'];

	return (
		<>
			{isMobile ? (
				<FixedContainer $open={isOpen!}>
					<FixedList>
						{navItems.map((text, i) => (
							<FixedItem key={i} onClick={(e) => handleClickNav(e, i)}>
								<NavButton href='/'>
									<Index>0{i}</Index>
									<Label>{text}</Label>
								</NavButton>
							</FixedItem>
						))}
					</FixedList>
				</FixedContainer>
			) : (
				<Container>
					<List>
						{navItems.map((text, i) => (
							<Item key={i} onClick={(e) => handleClickNav(e, i)}>
								<NavButton href='/'>
									<Index>0{i}</Index>
									<Label>{text}</Label>
								</NavButton>
							</Item>
						))}
					</List>
					<IndicatorContainer>
						<Indicator
							$currentPath={path}
							$previousPath={previousPath}
							$size={indicatorSize}
						/>
					</IndicatorContainer>
				</Container>
			)}
		</>
	);
};

export default NavBarButtons;
