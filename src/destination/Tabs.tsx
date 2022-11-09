import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Nav1 } from 'Typography';

type TabsProps = {
	data: Array<{ label: string }>;
	selected: number;
	setSelected: React.Dispatch<React.SetStateAction<number>>;
};

type IndicatorProps = {
	$currentPath: number;
	$previousPath: number;
};

const List = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	padding-left: 5%;
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
`;

const slide = ({ $currentPath, $previousPath }: IndicatorProps) => keyframes`
	0%{
		margin-left: ${$previousPath * 17}%; 
	}
	70% {
		margin-left: ${$currentPath * 17 + ($previousPath > $currentPath ? -1 : 1)}%; 
	}
	90% {
		margin-left: ${$currentPath * 17 + ($previousPath > $currentPath ? 1 : -1)}%; 
	}
	100%  {
		margin-left: ${$currentPath * 17}%; 
	}
`;

const Indicator = styled.div<IndicatorProps>`
	border-radius: 2px;
	height: 4px;
	background-color: white;
	width: 17%;
	margin-left: ${({ $currentPath }) => $currentPath * 17}%;
	animation: ${(props) => slide(props)} 0.2s ease-in;
`;

const NavButton = styled.a`
	display: flex;
	text-decoration: none;
	text-transform: uppercase;
	justify-content: center;
	align-items: center;
`;

const Tabs = ({ data, selected, setSelected }: TabsProps) => {
	const [previousSelected, setPreviousSelected] = useState(0);

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
							<Nav1>{label}</Nav1>
						</NavButton>
					</Item>
				))}
			</List>
			<IndicatorContainer>
				<Indicator $currentPath={selected} $previousPath={previousSelected} />
			</IndicatorContainer>
		</>
	);
};

export default Tabs;
