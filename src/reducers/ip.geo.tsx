import React from 'react';

export type IpGeoState = {
	query?: string;
	status?: string;
	continent?: string;
	continentCode?: string;
	country?: string;
	countryCode?: string;
	region?: string;
	regionName?: string;
	city?: string;
	district?: string;
	zip?: string;
	lat?: number;
	lon?: number;
	timezone?: string;
	offset?: number;
	currency?: string;
	isp?: string;
	org?: string;
	as?: string;
	asname?: string;
	mobile?: boolean;
	proxy?: boolean;
	hosting?: boolean;
};

export type IpGeoAction = {
	type: 'SEARCH';
	payload?: any;
};

export type IpGeoThunk = (action: React.Dispatch<IpGeoAction>) => void;

const ipGeoReducer = (state: IpGeoState, action: IpGeoAction): IpGeoState => {
	const { type, payload } = action;
	switch (type) {
		case 'SEARCH':
			return payload;
		default:
			throw new Error();
	}
};

export default ipGeoReducer;
