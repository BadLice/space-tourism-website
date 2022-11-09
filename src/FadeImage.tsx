import styled from 'styled-components';

const FadeImage = styled.div<{ $url: string }>`
	background: url('${({ $url }) => $url}') no-repeat;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;

	transition: background-image 1s ease-in-out;
`;

export default FadeImage;
