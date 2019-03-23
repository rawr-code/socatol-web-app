import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import jwt from 'jsonwebtoken';

// Utils
import setAuthorizationToken from './utils/setAuthorizationToken';

// Configuration
import store from './store';

import { setCurrentUser, Logout } from './store/actions/Auth';
import App from './App';

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  const decoded = jwt.decode(localStorage.token);
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    localStorage.removeItem('token');
    store.dispatch(Logout());
  } else {
    store.dispatch(setCurrentUser(localStorage.token));
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
