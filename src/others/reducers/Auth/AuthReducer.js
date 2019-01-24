const LOGIN = '../../actions/Auth/AuthActions';

// Initial States
const INITIAL_STATE = {
  loggedIn: true,
  user: {}
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...state, loggedIn: !state.loggedIn };
    }
    default:
      return state;
  }
}
