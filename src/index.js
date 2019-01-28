import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// import { whyDidYouUpdate } from 'why-did-you-update';

// Utils
import setAuthorizationToken from './utils/setAuthorizationToken';

// Configuration
import store from './store';

import { setCurrentUser } from './actions/Auth';
import App from './App';

if (localStorage.JWToken) {
  setAuthorizationToken(localStorage.JWToken);
  store.dispatch(setCurrentUser(localStorage.JWToken));
}

// whyDidYouUpdate(React);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
