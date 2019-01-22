import React from 'react';
import { connect } from 'react-redux';

// React Router
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = ({ Auth }) => ({ loggedIn: Auth.loggedIn });

export default connect(mapStateToProps)(PrivateRoute);
