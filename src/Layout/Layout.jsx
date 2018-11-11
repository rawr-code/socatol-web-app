import React, { Fragment, Component } from "react";

// React Router
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import Navbar from "./NavBar";
import DrawerNavigation from "./DrawerNavigation";

// Styles
import Styles from "./Styles";
import { withStyles } from "@material-ui/core/styles";

class Layout extends Component {
  state = {
    userInfo: {},
    navigationSelectedIndex: 0
  };

  handleNavigationItemClick = (event, index) => {
    this.setState({ navigationSelectedIndex: index });
  };

  render() {
    const { classes, routes } = this.props;
    const { navigationSelectedIndex } = this.state;
    return (
      <Fragment>
        <Navbar classes={classes} />
        <DrawerNavigation
          classes={classes}
          routes={routes}
          handleNavigation={this.handleNavigationItemClick.bind(this)}
          itemSelected={navigationSelectedIndex}
        />
        <main style={{ marginLeft: 260 }}>
          <h1>i am layout</h1>
          <Switch>
            {routes.map(route => {
              const { exact, path, component, name } = route;
              return (
                <Route
                  key={name}
                  exact={exact}
                  path={path}
                  render={() => component}
                />
              );
            })}
            <Redirect to="/" />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default withStyles(Styles)(Layout);
