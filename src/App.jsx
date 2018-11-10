import React from "react";

// Material UI Custom Theme
import MUICustomTheme from "./MUICustomTheme";

// React router
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";

// Redux & Store
import { Provider } from "react-redux";
import store from "./store";

// Components
import { Login, PrivateRoute } from "./components/routes";
import Layout from "./Layout";

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
              <PrivateRoute exact path="/" component={Layout} />
              <Route exact path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          </div>
        </MUICustomTheme>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
