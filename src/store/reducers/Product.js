import { ActionsTypes } from '../actions/Product';

// Initial State
const INITIAL_STATE = {
	loading: false,
	products: null,
	selectedProduct: null,
	error: null
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		// Status
		case ActionsTypes.STARTED:
			return {
				...state,
				loading: true
			};
		case ActionsTypes.SUCCESS:
			return {
				...state,
				loading: false,
				error: null
			};
		case ActionsTypes.FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload
			};

		// -------------------------
		case ActionsTypes.GET_ALL:
			return {
				...state,
				products: action.payload
			};

		case ActionsTypes.GET:
			return {
				...state,
				product: action.payload
			};

		default:
			return state;
	}
}
