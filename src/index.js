import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Utils
import { setAuthorizationToken } from './utils';

// Configuration
import { store } from './config';

import { setCurrentUser } from './actions/Auth';
import App from './App';

if (localStorage.JWToken) {
  setAuthorizationToken(localStorage.JWToken);
  store.dispatch(setCurrentUser(localStorage.JWToken));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
