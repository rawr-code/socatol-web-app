import React from "react";

// Material UI Custom Theme
import MUICustomTheme from "./MUICustomTheme";

// React router
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";

// Redux & Store
import { Provider } from "react-redux";
import store from "./store";

// Components
import { Login, PrivateRoute, appRoutes } from "./components/routes";
import Layout from "./Layout";

// Routes
const App = props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MUICustomTheme>
          <h1>Login</h1>

          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute path="/" component={Layout} routes={appRoutes} />
              <Redirect to="/login" />
            </Switch>
          </div>
        </MUICustomTheme>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
