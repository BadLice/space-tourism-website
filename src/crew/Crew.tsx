import { fadeIn, showSlideRight } from 'animations';
import data from 'data/data.json';
import FadeContainer from 'FadeContainer';
import FadeImage from 'FadeImage';
import Init from 'Init';
import { useState } from 'react';
import styled from 'styled-components';
import { Body, H3, H4 } from 'Typography';
import Slider from '../Slider';

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 85%;
	padding-top: 5%;
`;

const PersonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 100%;
	padding-bottom: 0%;
	padding-top: 0%;
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
`;

const Role = styled(H4)`
	text-transform: uppercase;
	padding-top: 30%;
	height: 10%;
	color: #ffffff;
	mix-blend-mode: normal;
	opacity: 0.5;
`;

const Name = styled(H3)`
	text-transform: uppercase;
	padding-top: 10%;
	height: 25%;
	width: 100%;
`;

const Description = styled(Body)`
	min-height: 129px;
	height: 50%;
	width: 80%;
	color: #d0d6f9;
`;

const Crew = () => {
	const [autoAdvance, setAutoAdvance] = useState(true);
	const [selected, setSelected] = useState(0);
	const { crew } = data;

	return (
		<Row>
			<InformationContainer>
				<Init index='02' text='meet your crew' />
				{crew.map((person, i) => (
					<FadeContainer
						key={i}
						$show={i === selected}
						onMouseOver={() => setAutoAdvance(false)}
						onMouseLeave={() => setAutoAdvance(true)}
					>
						<Role>{person.role}</Role>
						<Name>{person.name}</Name>
						<Description>{person.bio}</Description>
					</FadeContainer>
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
		</Row>
	);
};

export default Crew;
