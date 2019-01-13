import { STATUS } from "../../actions/InventoryManagement/WarehouseActions";

// Initial State
const INITIAL_STATE = {
  loading: false,
  warehouses: [],
  error: null
};

export default function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case STATUS.STARTED:
      return {
        ...state,
        loading: true
      };
    case STATUS.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.warehouses, action.payload]
      };
    case STATUS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
