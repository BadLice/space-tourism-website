import styled, { keyframes } from 'styled-components';
import { Body, H1, H4, H5 } from 'Typography';

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 85%;
`;

const HomeTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	gap: 0%;
	justify-content: center;
	padding-left: 10%;
`;

const Header = styled(H5)`
	max-width: 444px;
`;

const Title = styled(H1)`
	max-width: 444px;
	line-height: 3px;
`;

const Subtitle = styled(Body)`
	max-width: 444px;
`;

const ExploreContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 100%;
	gap: 0%;
	justify-content: flex-end;
	align-items: flex-end;
	padding-bottom: 10%;
	padding-right: 12%;
`;

const bounce = keyframes`
	0% {
		outline: 88px solid rgba(255, 255, 255, 0.1);

	}
	50% {
		outline: 120px solid rgba(255, 255, 255, 0.1);

	}
	100% {
		outline: 88px solid rgba(255, 255, 255, 0.1);

	}
`;

const ExploreButton = styled.button`
	width: 100%;
	height: 100%;
	max-width: 274px;
	max-height: 274px;
	border-radius: 50%;
	background-color: white;
	border: none;
	transition: outline 0.5s linear;
	cursor: pointer;

	&:hover {
		outline: 88px solid rgba(255, 255, 255, 0.1);
		animation: ${bounce} 2s ease-out infinite;
		animation-delay: 0.5s;
	}
`;

const ExploreText = styled(H4)`
	color: #0b0d17;
`;

const Home = () => {
	return (
		<Row>
			<HomeTextContainer>
				<Header>SO, YOU WANT TO TRAVEL TO</Header>
				<Title>SPACE</Title>
				<Subtitle>
					Let’s face it; if you want to go to space, you might as well genuinely go to
					outer space and not hover kind of on the edge of it. Well sit back, and
					relax because we’ll give you a truly out of this world experience!
				</Subtitle>
			</HomeTextContainer>
			<ExploreContainer>
				<ExploreButton>
					<ExploreText>Explore</ExploreText>
				</ExploreButton>
			</ExploreContainer>
		</Row>
	);
};

export default Home;
