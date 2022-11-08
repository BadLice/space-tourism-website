import NavBarButtons from 'NavBarButtons';
import NavBarLogo from 'NavBarLogo';
import styled from 'styled-components';

const Container = styled.div`
	height: 15%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	padding-top: 40px;
`;

type NavBarProps = {
	path: number;
	setPath: React.Dispatch<React.SetStateAction<number>>;
};

const NavBar = ({ path, setPath }: NavBarProps) => {
	return (
		<Container>
			<NavBarLogo />
			<NavBarButtons path={path} setPath={setPath} />
		</Container>
	);
};

export default NavBar;
