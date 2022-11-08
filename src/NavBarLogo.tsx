import styled from 'styled-components';

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

const NavBarLogo = () => {
	return (
		<LogoContainer>
			<LogoWrapper>
				<Logo></Logo>
			</LogoWrapper>
			<Line></Line>
		</LogoContainer>
	);
};

export default NavBarLogo;
