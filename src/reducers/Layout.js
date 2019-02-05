const INITIAL_STATE = {
	headerTitle: null,
	sideNavOpen: false
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'CHANGE_TITLE_HEADER': {
			return { ...state, headerTitle: action.payload };
		}
		default:
			return state;
	}
}
