import { Action } from "../../interfaces/context";

type Payload = boolean;

// valid actions
const OPEN_LEFT_ASIDE_MENU = 'OPEN_LEFT_ASIDE_MENU';
const CLOSE_LEFT_ASIDE_MENU = 'CLOSE_LEFT_ASIDE_MENU';

// actions creators
const openLeftAsideMenu = (): Action<boolean> => ({
	type: OPEN_LEFT_ASIDE_MENU,
	payload: true,
});

const closeLeftAsideMenu = (): Action<boolean> => ({
	type: CLOSE_LEFT_ASIDE_MENU,
	payload: false,
});

export {
	type Payload,
	OPEN_LEFT_ASIDE_MENU,
	CLOSE_LEFT_ASIDE_MENU,
	openLeftAsideMenu,
	closeLeftAsideMenu,
};
