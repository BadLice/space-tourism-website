import data from 'data/data.json';
import FadeContainer from 'FadeContainer';
import FadeImage from 'FadeImage';
import Init from 'Init';
import { useState } from 'react';
import styled from 'styled-components';
import { Body, H2, S1, S2 } from 'Typography';
import Tabs from './Tabs';

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 85%;
	padding-top: 5%;
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
`;

const ImageContainer = styled.div`
	height: 90%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const Image = styled(FadeImage)`
	width: 100%;
	height: auto;
	max-width: 455px;
	max-height: 455px;
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
`;

const TabsContainer = styled.div`
	height: 10%;
	width: 100%;
`;

const Name = styled(H2)`
	text-transform: uppercase;
	padding-top: 10%;
	height: 35%;
`;

const Description = styled(Body)`
	height: 35%;
	width: 80%;
	color: #d0d6f9;
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
		<Row>
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
						path={selected}
						setPath={setSelected}
					/>
				</TabsContainer>
				{destinations.map((planet, i) => (
					<FadeContainer key={i} $show={i === selected}>
						<Name>{planet.name}</Name>
						<Description>{planet.description}</Description>
						<Divider />
						<DataContainer>
							<Legend>avg. distance</Legend>
							<Legend>est. travel time</Legend>
							<Data>{planet.distance}</Data>
							<Data>{planet.travel}</Data>
						</DataContainer>
					</FadeContainer>
				))}
			</InformationContainer>
		</Row>
	);
};

export default Destination;
