import React from "react";

// React Router
import { Route, Switch, Redirect } from "react-router-dom";

// MaterialUI Components
import { AppBar, Toolbar, IconButton } from "@material-ui/core";

import LayoutDrawer from "./LayoutDrawer";
import MenuIcon from "@material-ui/icons/Menu";

import classNames from "classnames";
import styles from "./Styles";
import { withStyles } from "@material-ui/core/styles";

// routes
import { appRoutes } from "Routes";

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    const open = !this.state.open;
    this.setState({ open });
  };

  render() {
    const { classes, routes, match } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <LayoutDrawer classes={classes} open={open} routes={appRoutes} />

        <article className={classes.article}>
          <AppBar
            color="secondary"
            classes={{ root: classes.appBarRoot }}
            position="static"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar disableGutters={true} className={classes.toolbarRoot}>
              {/* <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton> */}
            </Toolbar>
          </AppBar>
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

        {/* <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </main> */}
      </div>
    );
  }
}

export default withStyles(styles)(MiniDrawer);
