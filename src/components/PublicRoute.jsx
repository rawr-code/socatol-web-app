import React from 'react';
import { connect } from 'react-redux';

// React Router
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = ({ Auth }) => ({
  isAuthenticated: Auth.isAuthenticated
});

export default connect(mapStateToProps)(PublicRoute);
