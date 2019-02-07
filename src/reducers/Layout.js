import {
	SET_TABS,
	SELECT_TAB,
	SET_HEADER_TITLE,
	OPEN_SIDENAV,
	CLOSE_SIDENAV
} from '../actions/Layout';

const INITIAL_STATE = {
	title: null,
	tabs: null,
	tabSelected: 0,
	sideNavOpen: false
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_HEADER_TITLE: {
			return { ...state, title: action.payload };
		}
		case SET_TABS: {
			return { ...state, tabs: action.payload };
		}
		case SELECT_TAB: {
			return { ...state, tabSelected: action.payload };
		}
		case OPEN_SIDENAV: {
			return { ...state, sideNavOpen: true };
		}
		case CLOSE_SIDENAV: {
			return { ...state, sideNavOpen: false };
		}
		default:
			return state;
	}
}
