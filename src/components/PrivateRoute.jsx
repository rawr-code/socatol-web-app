import React from 'react';
import { connect } from 'react-redux';

// React Router
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  layout,
  ...rest
}) => {
  const Layout = layout;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          layout ? (
            <Layout>
              <Component {...props} />
            </Layout>
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = ({ Auth }) => ({
  isAuthenticated: Auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
