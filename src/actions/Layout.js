export const HEADER_TABS = 'HEADER_TABS';
export const HEADER_RENAME = 'HEADER_RENAME';
export const OPEN_SIDENAV = 'OPEN_SIDENAV';
export const CLOSE_SIDENAV = 'CLOSE_SIDENAV';

export function headerTabs(payload) {
	return {
		type: HEADER_TABS,
		payload
	};
}

export function renameHeader(payload) {
	return {
		type: HEADER_RENAME,
		payload
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
