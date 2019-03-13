import { SET_CURRENT_USER, LOGOUT } from '../actions/Auth';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return { ...state, isAuthenticated: true, user: action.payload };
    }

    case LOGOUT: {
      return { ...state, isAuthenticated: false, user: {} };
    }

    default: {
      return state;
    }
  }
}
