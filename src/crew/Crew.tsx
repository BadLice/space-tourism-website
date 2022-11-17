import { fadeIn, showSlideRight } from 'animations';
import data from 'data/data.json';
import FadeContainer from 'FadeContainer';
import FadeImage from 'FadeImage';
import Init from 'Init';
import { useState } from 'react';
import styled from 'styled-components';
import { Body, H3, H4 } from 'Typography';
import Slider from '../Slider';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 85%;
	padding-top: 5%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		flex-direction: column;
		/* justify-content: center; */
		padding-top: 3%;
		height: 90%;
	}
`;

const PersonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 100%;
	padding-bottom: 0%;
	padding-top: 0%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		height: 55%;
	}
`;

const ImageContainer = styled(FadeContainer)`
	height: 100%;
	width: 100%;
	position: relative;
	animation: ${showSlideRight} 1s ease-in-out, ${fadeIn} 1s ease-in-out;
`;

const Image = styled(FadeImage)`
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;
`;

const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	height: 100%;
	justify-content: flex-start;
	align-items: flex-start;
	padding-bottom: 10%;
	padding-left: 12%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		padding-left: 0;
		padding-bottom: 0;
		height: 45%;
	}
`;

const TextContainer = styled(FadeContainer)`
	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		align-items: center;
		/* justify-content: center; */
		height: 60%;
	}
`;

const Role = styled(H4)`
	text-transform: uppercase;
	padding-top: 30%;
	height: 10%;
	color: #ffffff;
	mix-blend-mode: normal;
	opacity: 0.5;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		padding-top: 2%;
		height: 2%;
		font-size: 24px;
		line-height: 28px;
		text-align: center;
	}
`;

const Name = styled(H3)`
	text-transform: uppercase;
	padding-top: 10%;
	height: 25%;
	width: 100%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		padding-top: 4%;
		font-size: 40px;
		line-height: 46px;
		text-align: center;
		height: 20%;
	}
`;

const Description = styled(Body)`
	min-height: 129px;
	height: 50%;
	width: 80%;
	color: #d0d6f9;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 65%;
		text-align: center;
		padding-top: 2%;
		height: auto;
	}
`;

const Crew = () => {
	const [autoAdvance, setAutoAdvance] = useState(true);
	const [selected, setSelected] = useState(0);
	const { crew } = data;

	return (
		<Container>
			<InformationContainer>
				<Init index='02' text='meet your crew' />
				{crew.map((person, i) => (
					<TextContainer
						key={i}
						$show={i === selected}
						onMouseOver={() => setAutoAdvance(false)}
						onMouseLeave={() => setAutoAdvance(true)}
					>
						<Role>{person.role}</Role>
						<Name>{person.name}</Name>
						<Description>{person.bio}</Description>
					</TextContainer>
				))}
				<Slider
					orientation='horizontal'
					size='small'
					elements={crew.length}
					selected={selected}
					setSelected={setSelected}
					autoAdvance={autoAdvance}
					setAutoAdvance={setAutoAdvance}
				/>
			</InformationContainer>
			<PersonContainer>
				{crew.map((person, i) => (
					<ImageContainer key={i} $show={i === selected}>
						<Image $url={person.images.png} />
					</ImageContainer>
				))}
			</PersonContainer>
		</Container>
	);
};

export default Crew;
