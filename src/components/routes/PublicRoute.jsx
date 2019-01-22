import React from 'react';
import { connect } from 'react-redux';

// React Router
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = ({ Auth }) => ({ loggedIn: Auth.loggedIn });

export default connect(mapStateToProps)(PublicRoute);
