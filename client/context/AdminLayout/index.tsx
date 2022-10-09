import {
	createContext,
	PropsWithChildren,
	useReducer,
	useContext,
} from 'react';
import { Action } from '../../interfaces/context';
import { Payload } from './Actions';
import Reducer, { initialState } from './Reducer';

// context creation
const AdminLayoutState = createContext(initialState);
const AdminLayoutDispatch = createContext(
	(action: Action<Payload>): void => {}
);

export default function Provider({ children }: PropsWithChildren) {
	const [state, dispatch] = useReducer(Reducer, initialState);

	return (
		<AdminLayoutState.Provider value={state}>
			<AdminLayoutDispatch.Provider value={dispatch}>
				{children}
			</AdminLayoutDispatch.Provider>
		</AdminLayoutState.Provider>
	);
}

function useAdminLayoutState() {
	const context = useContext(AdminLayoutState);

	if (!context) {
		throw new Error(
			'useAdminLayoutState must be wrapped by a AdminLayoutProvider'
		);
	}

	return context;
}

function useAdminLayoutDispatch() {
	const context = useContext(AdminLayoutDispatch);

	if (!context) {
		throw new Error(
			'useAdminLayoutDispatch must be wrapped by a AdminLayoutProvider'
		);
	}

	return context;
}

function useAdminLayout() {
	return [useAdminLayoutState(), useAdminLayoutDispatch()];
}

export { useAdminLayoutState, useAdminLayoutDispatch, useAdminLayout };
