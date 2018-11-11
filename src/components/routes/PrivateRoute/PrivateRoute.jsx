import React from "react";

// React Router
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, loggedIn, routes, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn ? (
          <Component {...props} routes={routes} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
