export default function getAsyncDispatch<AsyncDispatchType, ReducerActionType>(
	dispatch: React.Dispatch<ReducerActionType>
): AsyncDispatchType {
	return ((action: ReducerActionType) => {
		if (typeof action === 'function') {
			action(dispatch);
		} else {
			dispatch(action);
		}
	}) as AsyncDispatchType;
}
