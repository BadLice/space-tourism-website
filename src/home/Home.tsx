import {
	bounceCircleBorder,
	fadeIn,
	showGrowthCircle,
	showSlideLeft,
	showSlideTop,
} from 'animations';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Body, H1, H4, H5 } from 'Typography';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 85%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		flex-direction: column;
	}
`;

const TextContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0%;
	justify-content: flex-end;
	padding-left: 10%;
	padding-top: 10%;
	padding-bottom: 10%;
	animation: ${showSlideLeft} 1s ease-in-out, ${fadeIn} 1s ease-in-out;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		height: 60%;
		align-items: center;
		justify-content: center;
		padding-left: 0;
		animation: ${showSlideTop} 1s ease-in-out, ${fadeIn} 1s ease-in-out;
	}
`;

const Header = styled(H5)`
	max-width: 444px;
	height: 10%;
	color: #d0d6f9;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		max-width: unset;
		height: 15%;
		font-size: 20px;
		line-height: 24px;
		text-align: center;
		letter-spacing: 3.375px;
		color: #d0d6f9;
	}
`;

const Title = styled(H1)`
	max-width: 444px;
	height: 35%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		max-width: unset;
		text-align: center;
		height: 50%;
		font-size: 150px;
		line-height: 150px;
	}
`;

const Subtitle = styled(Body)`
	max-width: 444px;
	color: #d0d6f9;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		max-width: 450px;
		font-size: 16px;
		line-height: 28px;
		text-align: center;
		color: #d0d6f9;
	}
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

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		height: 40%;
		justify-content: center;
		align-items: center;
		padding-right: 0%;
	}
`;

const ExploreButton = styled.button<{ $animated: boolean }>`
	width: 100%;
	height: 100%;
	max-width: 274px;
	max-height: 274px;
	border-radius: 50%;
	background-color: white;
	border: none;
	outline: 0px solid rgba(255, 255, 255, 0.1);
	transition: outline 0.5s linear;
	cursor: pointer;
	animation: ${({ $animated }) =>
		!$animated
			? css`
					${showGrowthCircle} 1s ease-in-out, ${fadeIn} 1s ease-in-out
			  `
			: 'none'};

	&:hover {
		outline: 88px solid rgba(255, 255, 255, 0.1);
		animation: ${bounceCircleBorder} 2s ease-out infinite;
		animation-delay: 0.5s;
	}

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		max-width: 242px;
		max-height: 242px;
	}
`;

const ExploreText = styled(H4)`
	color: #0b0d17;
`;

type HomeProps = {
	setPath: React.Dispatch<React.SetStateAction<number>>;
};

const Home = ({ setPath }: HomeProps) => {
	const [buttonAnimated, setButtonAnimated] = useState(false);

	const goToDestination = () => {
		setPath(1);
	};

	return (
		<Container>
			<TextContainer>
				<Header>SO, YOU WANT TO TRAVEL TO</Header>
				<Title>SPACE</Title>
				<Subtitle>
					Let’s face it; if you want to go to space, you might as well genuinely go to
					outer space and not hover kind of on the edge of it. Well sit back, and
					relax because we’ll give you a truly out of this world experience!
				</Subtitle>
			</TextContainer>
			<ExploreContainer>
				<ExploreButton
					$animated={buttonAnimated}
					onAnimationEnd={() => setButtonAnimated(true)}
					onClick={goToDestination}
				>
					<ExploreText>Explore</ExploreText>
				</ExploreButton>
			</ExploreContainer>
		</Container>
	);
};

export default Home;
