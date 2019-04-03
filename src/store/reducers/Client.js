import { ActionsTypes } from '../actions/Client';

// Initial State
const INITIAL_STATE = {
  loading: false,
  clients: null,
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
        bankAccounts: action.payload
      };

    case ActionsTypes.GET:
      return {
        ...state,
        bankAccount: action.payload
      };

    default:
      return state;
  }
}
