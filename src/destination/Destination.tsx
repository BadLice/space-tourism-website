import data from 'data/data.json';
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Body, H2, H5, S1, S2 } from 'Typography';
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

const InitContainer = styled.div`
	height: 10%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const InitText = styled(H5)`
	width: 90%;
`;

const InitIndex = styled(H5)`
	width: 10%;
	color: #ffffff;
	mix-blend-mode: normal;
	opacity: 0.25;
	font-weight: 700;
`;

const ImageContainer = styled.div`
	height: 90%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const Image = styled.div<{ $url: string }>`
	background: url('${({ $url }) => $url}') no-repeat;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: 100%;
	height: auto;
	max-width: 455px;
	max-height: 455px;
	transition: background-image 1s ease-in-out;
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

const fadeIn = keyframes`
	0% {
	    display: none;
	    opacity: 0;
	}
	100% {
	    opacity: 1;
	    display: flex;
	}
`;

const fadeOut = keyframes`
	0% {
	    opacity: 1;
	    display: flex;
	}
    100% {
	    display: none;
	    opacity: 0;
	}
`;

const InformationTextContainer = styled.div<{ $show: boolean }>`
	display: ${({ $show }) => ($show ? 'flex' : 'none')};
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: flex-start;
	align-items: flex-start;
	transition: display 1s ease-in-out;
	${({ $show }) =>
		$show
			? css`
					animation: ${fadeIn} 1s ease-in-out;
			  `
			: css`
					animation: ${fadeOut} 1s ease-in-out;
			  `}
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
				<InitContainer>
					<InitIndex>01</InitIndex>
					<InitText>PICK YOUR DESTINATION</InitText>
				</InitContainer>
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
					<InformationTextContainer key={i} $show={i === selected}>
						<Name>{planet.name}</Name>
						<Description>{planet.description}</Description>
						<Divider />
						<DataContainer>
							<Legend>avg. distance</Legend>
							<Legend>est. travel time</Legend>
							<Data>{planet.distance}</Data>
							<Data>{planet.travel}</Data>
						</DataContainer>
					</InformationTextContainer>
				))}
			</InformationContainer>
		</Row>
	);
};

export default Destination;
