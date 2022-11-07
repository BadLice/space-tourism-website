import axios from 'axios';
import { IpGeoAction } from './ip.geo';

export type IpGEoFetchLocationThunk = (
	dispatch: React.Dispatch<IpGeoAction>,
	ip?: string
) => void;

const CORS_PROXY = `https://cors-anywhere.herokuapp.com/`; //needed to make the app work on github pages without cors errors

export const fetchLocation: IpGEoFetchLocationThunk = async (dispatch, ip) => {
	try {
		if (ip) {
			const { data } = await axios.get(`${CORS_PROXY}http://ip-api.com/json/${ip || ''}`);
			dispatch({ type: 'SEARCH', payload: data });
		} else {
			const { data: myIp } = await axios.get(`https://icanhazip.com/`);
			fetchLocation(dispatch, myIp);
		}
	} catch (e) {
		dispatch({ type: 'SEARCH', payload: { status: 'fail' } });
	}
};
