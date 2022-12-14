import { fadeIn, showSlideBottom } from 'animations';
import styled from 'styled-components';
import { H5 } from 'Typography';

const Container = styled.div`
	height: 10%;
	width: 100%;
	display: flex;
	flex-direction: row;
	animation: ${showSlideBottom} 1s ease-in-out, ${fadeIn} 1s ease-in-out;
`;

const Text = styled(H5)`
	width: 90%;
	text-transform: uppercase;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
	}
`;

const Index = styled(H5)`
	width: 10%;
	color: #ffffff;
	mix-blend-mode: normal;
	opacity: 0.25;
	font-weight: 700;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		padding-left: 5%;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
	}
`;

type InitProps = {
	index: string;
	text: string;
};

const Init = ({ index, text }: InitProps) => {
	return (
		<Container>
			<Index>{index}</Index>
			<Text>{text}</Text>
		</Container>
	);
};

export default Init;
