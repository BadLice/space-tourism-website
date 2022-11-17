import { fadeIn, showSlideLeft, showSlideTop } from 'animations';
import data from 'data/data.json';
import FadeContainer from 'FadeContainer';
import FadeImage from 'FadeImage';
import Init from 'Init';
import { useState } from 'react';
import styled from 'styled-components';
import { Body, H2, S1, S2 } from 'Typography';
import Tabs from './Tabs';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 85%;
	padding-top: 5%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		flex-direction: column;
		height: 85%;
		justify-content: center;
		padding-top: 3%;
	}
`;

const PlanetContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 100%;
	gap: 10%;
	align-items: flex-end;
	padding-bottom: 10%;
	padding-left: 12%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		height: 50%;
		align-items: center;
		justify-content: center;
		padding-left: 0;
		padding-bottom: 0;
	}
`;

const ImageContainer = styled.div`
	height: 90%;
	width: 100%;
	display: flex;
	flex-direction: row;
	animation: ${showSlideLeft} 1s ease-in-out, ${fadeIn} 1s ease-in-out;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		justify-content: center;
		animation: ${showSlideTop} 1s ease-in-out, ${fadeIn} 1s ease-in-out;
	}
`;

const Image = styled(FadeImage)`
	width: 100%;
	height: auto;
	max-width: 455px;
	max-height: 455px;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		max-width: 300px;
		max-height: 300px;
	}
`;

const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 100%;
	justify-content: flex-start;
	align-items: flex-start;
	padding-bottom: 10%;
	padding-left: 12%;
	padding-top: 5%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		flex-direction: column;
		width: 100%;
		height: 50%;
		align-items: center;
		justify-content: center;
		padding-left: 0;
	}
`;

const TextContainer = styled(FadeContainer)`
	@media only screen and (max-width: 768px) and (min-width: 376px) {
		justify-content: center;
		align-items: center;
	}
`;

const TabsContainer = styled.div`
	height: 10%;
	width: 100%;
`;

const Name = styled(H2)`
	text-transform: uppercase;
	padding-top: 10%;
	height: 35%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		padding-top: 5%;
		width: 100%;
		font-weight: 400;
		font-size: 80px;
		line-height: 92px;
		text-align: center;
	}
`;

const Description = styled(Body)`
	height: 35%;
	width: 80%;
	color: #d0d6f9;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 85%;
		text-align: center;
	}
`;

const Divider = styled.div`
	height: 1px;
	width: 80%;
	background-color: #383b4b;
`;

const DataContainer = styled.div`
	width: 100%;
	height: 15%;
	display: grid;
	grid-template-columns: auto auto;
	padding-top: 3%;
	row-gap: 20%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 80%;
		text-align: center;
	}
`;

const Legend = styled(S2)`
	color: #d0d6f9;
`;

const Data = styled(S1)``;

const Destination = () => {
	const [selected, setSelected] = useState(0);
	const { destinations } = data;
	const planet = destinations[selected];

	return (
		<Container>
			<PlanetContainer>
				<Init index='01' text='pick your destination' />
				<ImageContainer>
					<Image $url={planet.images.png} />
				</ImageContainer>
			</PlanetContainer>
			<InformationContainer>
				<TabsContainer>
					<Tabs
						data={destinations.map(({ name }) => ({ label: name }))}
						selected={selected}
						setSelected={setSelected}
					/>
				</TabsContainer>
				{destinations.map((planet, i) => (
					<TextContainer key={i} $show={i === selected}>
						<Name>{planet.name}</Name>
						<Description>{planet.description}</Description>
						<Divider />
						<DataContainer>
							<Legend>avg. distance</Legend>
							<Legend>est. travel time</Legend>
							<Data>{planet.distance}</Data>
							<Data>{planet.travel}</Data>
						</DataContainer>
					</TextContainer>
				))}
			</InformationContainer>
		</Container>
	);
};

export default Destination;
