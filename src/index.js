import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

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

// Apollo Config
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQlErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
