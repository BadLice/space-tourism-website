import React, { useEffect } from 'react';
import styled from 'styled-components';
import { H4 } from 'Typography';

type SliderProps = {
	elements: number;
	selected: number;
	setSelected: React.Dispatch<React.SetStateAction<number>>;
	autoAdvance: boolean;
	setAutoAdvance: React.Dispatch<React.SetStateAction<boolean>>;
	orientation: 'horizontal' | 'vertical';
	size: 'small' | 'big';
};

const List = styled.ul<{ $orientation: string }>`
	width: ${({ $orientation }) => ($orientation === 'vertical' ? 'unset' : '100%')};
	height: ${({ $orientation }) => ($orientation === 'vertical' ? '100%' : 'unset')};
	display: flex;
	flex-direction: ${({ $orientation }) => ($orientation === 'vertical' ? 'column' : 'row')};
	padding-left: 0%;
	list-style: none;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		align-items: center;
		justify-content: center;
	}
`;

const ItemSmall = styled.li<{ $active: boolean }>`
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

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		margin-right: 3%;
	}
`;

const Index = styled(H4)`
	position: absolute;
	white-space: pre;
	display: inline;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -16px);
`;

const ItemBig = styled.li<{ $active: boolean }>`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: 1px solid #ffffff;
	background-color: ${({ $active }) => ($active ? '#FFFFFF' : 'transparent')};
	border: 1px solid rgba(100%, 100%, 100%, 25%);
	margin-bottom: 50%;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	position: relative;

	&:hover {
		border: 1px solid rgba(100%, 100%, 100%, 100%);
	}

	& > ${Index} {
		color: ${({ $active }) => ($active ? '#0B0D17' : '#FFFFFF')};
	}
`;

const Slider = ({
	elements,
	selected,
	setSelected,
	autoAdvance,
	setAutoAdvance,
	orientation,
	size,
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
			<List $orientation={orientation}>
				{Array.from({ length: elements }).map((_, id) => (
					<React.Fragment key={id}>
						{(() => {
							const Item = size === 'small' ? ItemSmall : ItemBig;
							return (
								<Item
									onMouseOver={() => setAutoAdvance(false)}
									onMouseLeave={() => setAutoAdvance(true)}
									onClick={(e) => handleClickNav(e, id)}
									$active={id === selected}
								>
									{size === 'big' && <Index>{id + 1}</Index>}
								</Item>
							);
						})()}
					</React.Fragment>
				))}
			</List>
		</>
	);
};

export default Slider;
