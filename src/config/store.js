import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// Ducks Reducers
import * as reducers from "../ducks";

// Combine all Reducers
const rootReducer = combineReducers(reducers);

// ReduxDevTools Chrome Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux Store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
