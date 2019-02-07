export const SET_HEADER_TITLE = 'SET_HEADER_TITLE';
export const SET_TABS = 'SET_TABS';
export const SELECT_TAB = 'SELECT_TAB';
export const OPEN_SIDENAV = 'OPEN_SIDENAV';
export const CLOSE_SIDENAV = 'CLOSE_SIDENAV';

export function setHeaderTitle(title) {
	return {
		type: SET_HEADER_TITLE,
		payload: title
	};
}

export function setTabs(tabs) {
	return {
		type: SET_TABS,
		payload: tabs
	};
}

export function selectTab(index) {
	return {
		type: SELECT_TAB,
		payload: index
	};
}

export function openSideNav() {
	return {
		type: OPEN_SIDENAV
	};
}

export function closeSideNav() {
	return {
		type: CLOSE_SIDENAV
	};
}
