const backgrounds = [
	'./assets/home/background-home-<screen>.jpg',
	'./assets/destination/background-destination-<screen>.jpg',
	'./assets/crew/background-crew-<screen>.jpg',
	'./assets/technology/background-technology-<screen>.jpg',
];

export const getBackgroundsList = () =>
	backgrounds.reduce<Array<string>>(
		(acc, path) => [
			...acc,
			path.replace('<screen>', 'tablet'),
			path.replace('<screen>', 'desktop'),
			path.replace('<screen>', 'mobile'),
		],
		[]
	);

export const getCurrentBackground = (path: number, isTablet: boolean) =>
	backgrounds[path].replace('<screen>', isTablet ? 'tablet' : 'desktop');
