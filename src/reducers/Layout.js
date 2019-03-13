import {
  OPEN_SIDENAV,
  CLOSE_SIDENAV,
  SELECT_ITEM_MENU
} from '../actions/Layout';

const INITIAL_STATE = {
  sideNavOpen: false,
  menuSelectedItem: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_SIDENAV: {
      return { ...state, sideNavOpen: true };
    }
    case CLOSE_SIDENAV: {
      return { ...state, sideNavOpen: false };
    }
    case SELECT_ITEM_MENU: {
      return { ...state, menuSelectedItem: action.payload };
    }
    default:
      return state;
  }
}
