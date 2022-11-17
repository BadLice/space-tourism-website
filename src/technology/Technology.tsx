import { fadeIn, showSlideLeft } from 'animations';
import data from 'data/data.json';
import FadeContainer from 'FadeContainer';
import FadeImage from 'FadeImage';
import Init from 'Init';
import { useState } from 'react';
import Slider from 'Slider';
import styled from 'styled-components';
import { Body, H3, Nav1 } from 'Typography';
import useMediaQuery from 'useMediaQuery';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	height: 85%;
	/* padding-top: 5%; */

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		padding-top: 0;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
	width: 100%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		flex-direction: column;
	}
`;

const PartContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 100%;
	padding-bottom: 0%;
	padding-top: 0%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		height: 50%;
		width: 100%;
	}
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
	flex-direction: row;
	width: 70%;
	height: 100%;
	padding-bottom: 10%;
	padding-top: 8%;
	padding-left: 12%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		flex-direction: column;
		height: 50%;
		width: 100%;
		padding-bottom: 0;
		padding-left: 0;
		padding-top: 0;
		align-items: center;
		order: 2;
	}
`;

const SliderContianer = styled.div`
	display: flex;
	flex-direction: row;
	width: 20%;
	height: 100%;
	padding-top: 10%;
	gap: 10%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		height: 30%;
		padding-top: 0%;
	}
`;

const TextContianer = styled.div<{ $show: boolean }>`
	display: ${({ $show }) => ($show ? 'flex' : 'none')};
	flex-direction: column;
	animation: ${showSlideLeft} 1s ease-in-out, ${fadeIn} 1s ease-in-out;
	width: 70%;
	height: 100%;
	padding-top: 13%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		align-items: center;
		padding-top: 3%;
	}
`;

const Role = styled(Nav1)`
	text-transform: uppercase;
	height: 7%;
	color: #d0d6f9;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		text-align: center;
		height: 10%;
	}
`;

const Name = styled(H3)`
	text-transform: uppercase;
	height: 15%;
	width: 100%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		text-align: center;
		font-size: 40px;
		line-height: 46px;
	}
`;

const Description = styled(Body)`
	min-height: 129px;
	height: 50%;
	width: 93%;
	color: #d0d6f9;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		text-align: center;
		font-size: 16px;
		line-height: 28px;
	}
`;

const InitContainer = styled.div`
	display: flex;
	height: 6%;
	padding-top: 5%;
	padding-left: 12%;
	width: 50%;

	& > * > * {
		height: 100%;
	}

	& > * {
		height: 100%;
	}

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		width: 100%;
		padding-top: 3%;
		padding-left: 0;
	}
`;

const Technology = () => {
	const [autoAdvance, setAutoAdvance] = useState(true);
	const [selected, setSelected] = useState(0);
	const isTablet = useMediaQuery('(max-width: 768px)');
	const { technology } = data;

	return (
		<Container>
			<InitContainer>
				<Init index='03' text='space launch 101' />
			</InitContainer>
			<Wrapper>
				<InformationContainer>
					<SliderContianer>
						<Slider
							orientation={isTablet ? 'horizontal' : 'vertical'}
							size='big'
							elements={3}
							selected={selected}
							setSelected={setSelected}
							autoAdvance={autoAdvance}
							setAutoAdvance={setAutoAdvance}
						/>
					</SliderContianer>
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
				</InformationContainer>
				<PartContainer>
					{technology.map((part, i) => (
						<ImageContainer key={i} $show={i === selected}>
							<Image
								$url={isTablet ? part.images.landscape : part.images.portrait}
							/>
						</ImageContainer>
					))}
				</PartContainer>
			</Wrapper>
		</Container>
	);
};

export default Technology;
