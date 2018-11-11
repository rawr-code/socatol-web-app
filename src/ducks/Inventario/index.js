// Actions
const SELECTED_TAB_INDEX = "/app/components/routes/Inventario/TabsHeader";

// Actions Creators
export function handleChangeTab(index) {
  return { type: SELECTED_TAB_INDEX, index: index };
}

// Initial States
const INITIAL_STATE = {
  selectedTabIndex: 0,
  almacenes: [],
  productos: [],
  proveedores: []
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECTED_TAB_INDEX: {
      return { ...state, selectedTabIndex: action.index };
    }
    default:
      return state;
  }
}
