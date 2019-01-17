import { createStore, applyMiddleware, compose } from 'redux';

// Middlewares
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

// Reducers
import rootReducer from '../reducers';

// ReduxDevTools Chrome Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux Store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, ReduxPromise))
);

export default store;
