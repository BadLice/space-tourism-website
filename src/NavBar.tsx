import NavBarButtons from 'NavBarButtons';
import NavBarLogo from 'NavBarLogo';
import React, { useState } from 'react';
import styled from 'styled-components';
import useMediaQuery from 'useMediaQuery';

const Container = styled.div`
	height: 15%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	padding-top: 40px;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		padding-top: 0px;
		height: 10%;
	}

	@media only screen and (max-width: 375px) {
		padding-top: 0px;
	}
`;

const Button = styled.button`
	width: 30%;
	height: 100%;
	background: none;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 11;
`;

const ButtonIcon = styled.div<{ $open: boolean }>`
	background-image: url(${({ $open }) =>
		$open ? './assets/shared/icon-close.svg' : './assets/shared/icon-hamburger.svg'});
	width: 25px;
	height: 21px;
	background-repeat: no-repeat;
	background-size: 100% 100%;
`;

type NavBarProps = {
	path: number;
	setPath: React.Dispatch<React.SetStateAction<number>>;
};

const NavBar = ({ path, setPath }: NavBarProps) => {
	const isMobile = useMediaQuery('(max-width: 375px)');
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen((o) => !o);
	};

	return (
		<>
			{isMobile ? (
				<>
					<Container>
						<NavBarLogo />
						<Button onClick={handleOpen}>
							<ButtonIcon $open={isOpen} />
						</Button>
						<NavBarButtons path={path} setPath={setPath} isOpen={isOpen} />
					</Container>
				</>
			) : (
				<Container>
					<NavBarLogo />
					<NavBarButtons path={path} setPath={setPath} />
				</Container>
			)}
		</>
	);
};

export default NavBar;
