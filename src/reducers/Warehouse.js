import { ActionsTypes } from '../actions/Warehouse';

// Initial State
const INITIAL_STATE = {
  loading: false,
  warehouses: [],
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
        error: action.payload.error
      };

    // -------------------------
    case ActionsTypes.GET_ALL:
      return {
        ...state,
        warehouses: action.payload
      };

    default:
      return state;
  }
}
