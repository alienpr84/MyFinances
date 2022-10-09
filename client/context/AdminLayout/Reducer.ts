import { Action } from '../../interfaces/context';
import {
	Payload,
	CLOSE_LEFT_ASIDE_MENU,
	OPEN_LEFT_ASIDE_MENU,
} from './Actions';

type State = {
	isOpenLeftMenu: boolean;
};

export const initialState: State = {
	isOpenLeftMenu: false,
};

export default function Reducer(
	state: State = initialState,
	{ type, payload }: Action<Payload>
): State {
	switch (type) {
		case OPEN_LEFT_ASIDE_MENU:
			return { ...state, isOpenLeftMenu: payload };
		case CLOSE_LEFT_ASIDE_MENU:
			return { ...state, isOpenLeftMenu: payload };
		default:
			return state;
	}
}
