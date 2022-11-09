import styled, { css, keyframes } from 'styled-components';

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

const FadeContainer = styled.div<{ $show: boolean }>`
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

export default FadeContainer;
