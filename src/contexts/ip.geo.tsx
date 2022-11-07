import { createContext, useCallback, useReducer } from 'react';
import ipGeoReducer, { IpGeoAction, IpGeoState, IpGeoThunk } from 'reducers/ip.geo';
import getAsyncDispatch from './getAsyncDispatch';

interface IpGeoProviderProps {
	children?: React.ReactNode;
}

export type IpGeoContextType = [IpGeoState, (action: IpGeoAction | IpGeoThunk) => void];

export type AsyncDispatchType = (action: IpGeoAction | IpGeoThunk) => void;

export const IpGeoContext = createContext<{
	state: IpGeoState;
	dispatch: (action: IpGeoAction | IpGeoThunk) => void;
}>({ state: {}, dispatch: () => null });

export const IpGeoProvider = ({ children }: IpGeoProviderProps) => {
	const [state, dispatch] = useReducer(ipGeoReducer, {});

	const asyncDispatch: AsyncDispatchType = useCallback(
		getAsyncDispatch<AsyncDispatchType, IpGeoAction>(dispatch),
		[]
	);

	return (
		<>
			<IpGeoContext.Provider value={{ state, dispatch: asyncDispatch }}>
				{children}
			</IpGeoContext.Provider>
		</>
	);
};
