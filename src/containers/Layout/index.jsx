import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles';

// Material UI Components
import { withStyles } from '@material-ui/core';

// Components
import NavBar from './NavBar';
import SideNav from './SideNav';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
      selectedItem: 0
    };
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };

  handleListItemClick = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem, mobileOpen } = this.state;
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <NavBar classes={classes} navOpen={this.handleDrawerToggle} />
        <SideNav
          classes={classes}
          selectedItem={selectedItem}
          mobileOpen={mobileOpen}
          handleClick={this.handleListItemClick}
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <main className={classes.content}>{children}</main>
      </div>
    );
  }
}

const mapStateToProps = ({ Layout }) => ({
  state: { ...Layout }
});

export default connect(mapStateToProps)(withStyles(styles)(Layout));
