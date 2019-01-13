import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Ducks Reducers
import * as reducers from "../ducks";

// Warehouse Reducers
import * as probandoaja from "../reducers/InventoryManagement/WarehouseReducer";

// Combine Reducers
const Inventory_Management = combineReducers(probandoaja);

// Combine all Reducers
const rootReducer = combineReducers({
  ...reducers,
  Inventory_Management
});

// ReduxDevTools Chrome Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux Store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
