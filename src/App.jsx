import React from "react";

// Material UI Custom Theme
import MUICustomTheme from "./MUICustomTheme";

// React router
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

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
          <main>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute path="/" component={Layout} routes={appRoutes} />
              <Redirect to="/login" />
            </Switch>
          </main>
        </MUICustomTheme>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
