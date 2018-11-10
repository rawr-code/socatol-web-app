// Actions
const LOGIN = "app/components/routes/Login";

// Action Creators
export function loggedIn() {
  return { type: LOGIN };
}

// Initial States
const INITIAL_STATE = {
  loggedIn: false,
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
