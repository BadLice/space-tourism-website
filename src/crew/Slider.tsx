import { useEffect } from 'react';
import styled from 'styled-components';

type SliderProps = {
	elements: number;
	selected: number;
	setSelected: React.Dispatch<React.SetStateAction<number>>;
	autoAdvance: boolean;
	setAutoAdvance: React.Dispatch<React.SetStateAction<boolean>>;
};

const List = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding-left: 0%;
	list-style: none;
`;

const Item = styled.li<{ $active: boolean }>`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background: #ffffff;
	mix-blend-mode: normal;
	opacity: ${({ $active }) => ($active ? 1 : 0.17)};
	margin-right: 5%;
	cursor: pointer;
	transition: opacity 0.2s ease-in-out;

	&:hover {
		mix-blend-mode: normal;
		opacity: 0.5;
	}
`;

const Slider = ({
	elements,
	selected,
	setSelected,

	autoAdvance,
	setAutoAdvance,
}: SliderProps) => {
	const handleClickNav = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, p: number) => {
		e.preventDefault();
		setSelected(p);
	};

	const advance = () => {
		setSelected((selected) => (selected + 1) % elements);
	};

	useEffect(() => {
		if (autoAdvance) {
			const i = setInterval(advance, 5000);
			return () => clearInterval(i);
		}
	});

	return (
		<>
			<List>
				{Array.from({ length: elements }).map((_, id) => (
					<Item
						onMouseOver={() => setAutoAdvance(false)}
						onMouseLeave={() => setAutoAdvance(true)}
						key={id}
						onClick={(e) => handleClickNav(e, id)}
						$active={id === selected}
					/>
				))}
			</List>
		</>
	);
};

export default Slider;
