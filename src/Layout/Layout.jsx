import React, { Component } from "react";

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
    const { classes, routes, match } = this.props;
    const { navigationSelectedIndex } = this.state;
    return (
      <section className={classes.root}>
        <Navbar classes={classes} />
        <DrawerNavigation
          classes={classes}
          routes={routes}
          handleNavigation={this.handleNavigationItemClick.bind(this)}
          itemSelected={navigationSelectedIndex}
        />
        <article className={classes.article}>
          <div className={classes.mixin} />
          <Switch>
            {routes.map(route => {
              const { name, path, component, exact } = route;
              const Po = component;
              return (
                <Route
                  key={name}
                  path={path}
                  exact={exact}
                  render={
                    typeof component === "function"
                      ? props => <Po {...props} />
                      : () => component
                  }
                />
              );
            })}
            <Redirect to={match.url} />
          </Switch>
        </article>
      </section>
    );
  }
}

export default withStyles(Styles)(Layout);
