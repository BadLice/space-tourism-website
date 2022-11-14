import { fadeIn, showSlideLeft } from 'animations';
import data from 'data/data.json';
import FadeContainer from 'FadeContainer';
import FadeImage from 'FadeImage';
import Init from 'Init';
import { useState } from 'react';
import Slider from 'Slider';
import styled from 'styled-components';
import { Body, H3, Nav1 } from 'Typography';

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 85%;
	padding-top: 5%;
`;

const PartContainer = styled.div`
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
	padding-bottom: 10%;
	padding-left: 12%;
`;
const SliderContianer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	padding-top: 10%;
	gap: 10%;
`;

const TextContianer = styled.div<{ $show: boolean }>`
	display: ${({ $show }) => ($show ? 'flex' : 'none')};
	flex-direction: column;
	animation: ${showSlideLeft} 1s ease-in-out, ${fadeIn} 1s ease-in-out;
	width: 70%;
	height: 100%;
	padding-top: 3%;
`;

const Role = styled(Nav1)`
	text-transform: uppercase;
	height: 7%;
	color: #d0d6f9;
`;

const Name = styled(H3)`
	text-transform: uppercase;
	height: 15%;
	width: 100%;
`;

const Description = styled(Body)`
	min-height: 129px;
	height: 50%;
	width: 93%;
	color: #d0d6f9;
`;

const Technology = () => {
	const [autoAdvance, setAutoAdvance] = useState(true);
	const [selected, setSelected] = useState(0);
	const { technology } = data;

	return (
		<Row>
			<InformationContainer>
				<Init index='03' text='space launch 101' />
				<SliderContianer>
					<Slider
						orientation='vertical'
						size='big'
						elements={3}
						selected={selected}
						setSelected={setSelected}
						autoAdvance={autoAdvance}
						setAutoAdvance={setAutoAdvance}
					/>
					{technology.map((part, i) => (
						<TextContianer
							key={i}
							$show={i === selected}
							onMouseOver={() => setAutoAdvance(false)}
							onMouseLeave={() => setAutoAdvance(true)}
						>
							<Role>The terminology...</Role>
							<Name>{part.name}</Name>
							<Description>{part.description}</Description>
						</TextContianer>
					))}
				</SliderContianer>
			</InformationContainer>
			<PartContainer>
				{technology.map((part, i) => (
					<ImageContainer key={i} $show={i === selected}>
						<Image $url={part.images.portrait} />
					</ImageContainer>
				))}
			</PartContainer>
		</Row>
	);
};

export default Technology;
