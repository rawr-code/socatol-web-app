import { OPEN_SIDENAV, CLOSE_SIDENAV } from '../actions/Layout';

const INITIAL_STATE = {
  sideNavOpen: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_SIDENAV: {
      return { ...state, sideNavOpen: true };
    }
    case CLOSE_SIDENAV: {
      return { ...state, sideNavOpen: false };
    }
    default:
      return state;
  }
}
