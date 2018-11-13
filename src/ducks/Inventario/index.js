// Actions
const SELECTED_TAB_INDEX = "/app/components/routes/Inventario/TabsHeader";
const CREATE_ALMACEN = "/app/components/routes/Inventario/routes/Create";

// Actions Creators
export function handleChangeTab(index) {
  return { type: SELECTED_TAB_INDEX, index: index };
}

export function newAlmancen(data) {
  return { type: CREATE_ALMACEN, data: data };
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
    case CREATE_ALMACEN: {
      let almacenes = state.almacenes;
      const data = action.data;
      almacenes.push(data);

      return { ...state, almacenes: state.almacenes };
    }
    default:
      return state;
  }
}
