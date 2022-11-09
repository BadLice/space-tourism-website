import { keyframes } from 'styled-components';

const showSlideLeft = keyframes`
	0% {
		
	transform: translateX(-10%);

	}
	100% {
		transform: translateX(0%);

	}
`;

const showGrowthCircle = keyframes`
	0% {
		
	transform: scale(0.8);

	}
	100% {
		transform: scale(1);

	}
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const bounceCircleBorder = keyframes`
	0% {
		outline: 88px solid rgba(255, 255, 255, 0.1);

	}
	50% {
		outline: 120px solid rgba(255, 255, 255, 0.1);

	}
	100% {
		outline: 88px solid rgba(255, 255, 255, 0.1);

	}
`;

export { showSlideLeft, showGrowthCircle, fadeIn, bounceCircleBorder };
