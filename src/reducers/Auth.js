import { SET_CURRENT_USER } from '../actions/Auth';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return { ...state, isAuthenticated: true };
    }

    default: {
      return state;
    }
  }
}
