import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Nav1 } from 'Typography';
import useMediaQuery from 'useMediaQuery';

type TabsProps = {
	data: Array<{ label: string }>;
	selected: number;
	setSelected: React.Dispatch<React.SetStateAction<number>>;
};

type IndicatorProps = {
	$currentPath: number;
	$previousPath: number;
	$size: number;
};

const List = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	padding-left: 5%;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		justify-content: center;
		padding-left: 0;
	}
`;

const Item = styled.li`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	height: 100%;
	width: 17%;
	text-align: center;
`;

const IndicatorContainer = styled.div`
	height: 1px;
	width: 100%;
	padding-left: 5%;
	align-self: flex-start;
	display: flex;
	flex-direction: row;
	justify-content: left;

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		justify-content: center;
	}
`;

const slide = ({ $currentPath, $previousPath, $size }: IndicatorProps) => keyframes`
	0%{
		margin-left: ${$previousPath * $size}%; 
	}
	70% {
		margin-left: ${$currentPath * $size + ($previousPath > $currentPath ? -1 : 1)}%; 
	}
	90% {
		margin-left: ${$currentPath * $size + ($previousPath > $currentPath ? 1 : -1)}%; 
	}
	100%  {
		margin-left: ${$currentPath * $size}%; 
	}
`;

const Indicator = styled.div<IndicatorProps>`
	border-radius: 2px;
	height: 4px;
	background-color: white;
	width: ${({ $size }) => $size}%;
	margin-left: ${({ $currentPath, $size }) => $currentPath * $size}%;
	animation: ${(props) => slide(props)} 0.2s ease-in;
`;

const NavButton = styled.a`
	display: flex;
	text-decoration: none;
	text-transform: uppercase;
	justify-content: center;
	align-items: center;
`;

const Text = styled(Nav1)`
	@media only screen and (max-width: 768px) and (min-width: 376px) {
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		letter-spacing: 2.7px;
		color: #ffffff;
	}
`;

const Tabs = ({ data, selected, setSelected }: TabsProps) => {
	const [previousSelected, setPreviousSelected] = useState(0);

	const isTablet = useMediaQuery('(max-width: 768px)');

	let indicatorSize = isTablet ? 13 : 17;

	const handleClickNav = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, p: number) => {
		e.preventDefault();
		setPreviousSelected(selected);
		setSelected(p);
	};

	return (
		<>
			<List>
				{data.map(({ label }, id) => (
					<Item key={id} onClick={(e) => handleClickNav(e, id)}>
						<NavButton href='/'>
							<Text>{label}</Text>
						</NavButton>
					</Item>
				))}
			</List>
			<IndicatorContainer>
				<Indicator
					$currentPath={selected}
					$previousPath={previousSelected}
					$size={indicatorSize}
				/>
			</IndicatorContainer>
		</>
	);
};

export default Tabs;
