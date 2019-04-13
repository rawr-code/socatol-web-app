import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import jwt from 'jsonwebtoken';

// Utils
// import setAuthorizationToken from './utils/setAuthorizationToken';

import App from './App';

// if (localStorage.token) {
//   setAuthorizationToken(localStorage.token);
//   const decoded = jwt.decode(localStorage.token);
//   const currentTime = Date.now() / 1000;

//   if (decoded.exp < currentTime) {
//     localStorage.removeItem('token');
//     console.log('Token removido!');
//   } else {
//     console.log('Agregando Token');
//   }
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
