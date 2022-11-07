import styled from 'styled-components';

const Container = styled.div`
	height: 15%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	padding-top: 40px;
`;

const List = styled.ul`
	height: 100%;
	width: 60%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(40.7742px);
	padding-left: 5%;
`;

const Item = styled.li<{ $active?: boolean }>`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	height: 100%;
	width: 17%;
	text-align: center;
	border-bottom: 1px solid ${({ $active }) => ($active ? `white` : `transparent`)};
	transition: border 0.5s ease-in-out;
`;

const FirstItem = styled(Item)`
	margin-left: 5%;
`;

const SmallLine = styled.li`
	display: inline;
	width: 3%;
	height: 1px;
	margin-left: -9.2%;
	background: #ffffff;
	mix-blend-mode: normal;
	opacity: 0.25;
`;

const NavButton = styled.a`
	display: flex;
	font-family: 'Barlow Condensed';
	font-style: normal;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 2.7px;
	color: #ffffff;
	text-decoration: none;
	text-transform: uppercase;
	justify-content: center;
	align-items: center;
`;

const Index = styled.span`
	width: 20%;
	font-weight: 700;
`;

const Text = styled.span`
	font-weight: 400;
`;

const LogoContainer = styled.div`
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
	width: 100%;
	height: 1px;
	background: #ffffff;
	mix-blend-mode: normal;
	opacity: 0.25;
`;

type NavBarProps = {
	path: number;
	setPath: React.Dispatch<React.SetStateAction<number>>;
};

//TODO: better animation when changing path

const NavBar = ({ path, setPath }: NavBarProps) => {
	const handleClickNav = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, p: number) => {
		e.preventDefault();
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
			<List>
				<SmallLine></SmallLine>
				<FirstItem $active={path === 0} onClick={(e) => handleClickNav(e, 0)}>
					<NavButton href='/'>
						<Index>00</Index>
						<Text>Home</Text>
					</NavButton>
				</FirstItem>
				<Item $active={path === 1} onClick={(e) => handleClickNav(e, 1)}>
					<NavButton href='/'>
						<Index>01</Index>
						<Text>Destination</Text>
					</NavButton>
				</Item>
				<Item $active={path === 2} onClick={(e) => handleClickNav(e, 2)}>
					<NavButton href='/'>
						<Index>02</Index>
						<Text>Crew</Text>
					</NavButton>
				</Item>
				<Item $active={path === 3} onClick={(e) => handleClickNav(e, 3)}>
					<NavButton href='/'>
						<Index>03</Index>
						<Text>Technology</Text>
					</NavButton>
				</Item>
			</List>
		</Container>
	);
};

export default NavBar;
