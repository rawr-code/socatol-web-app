import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Middlewares
import ReduxThunk from "redux-thunk";
import ReduxPromise from "redux-promise";
// import logger from "redux-logger";

// Reducers
import rootReducer from "./reducers";

// Create Redux Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, ReduxPromise))
);

export default store;
