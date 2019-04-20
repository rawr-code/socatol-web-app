import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

// Material UI
import { AppBar, Tabs, Tab, withStyles } from '@material-ui/core';

import styles from './styles';

class FeatureBarTabs extends Component {
  state = {
    value: 0
  };

  componentWillMount() {
    const {
      tabs,
      match: { path },
      location: { pathname }
    } = this.props;

    tabs.forEach((tab, index) => {
      if (`${path}${tab.to}` === pathname) {
        this.setState({ value: index });
      }
    });
  }

  handleOnChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const {
      classes,
      tabs,
      match: { path }
    } = this.props;
    const { value } = this.state;
    return (
      <AppBar
        component="div"
        className={classes.root}
        color="primary"
        position="static"
        elevation={0}>
        <Tabs textColor="inherit" value={value} onChange={this.handleOnChange}>
          {tabs.map(item => (
            <Tab
              textColor="inherit"
              label={item.label}
              className={classes.root}
              key={item.label}
              component={Link}
              to={`${path}${item.to ? item.to : ''}`}
            />
          ))}
        </Tabs>
      </AppBar>
    );
  }
}

FeatureBarTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  tabs: PropTypes.array.isRequired
};

// Apply styles
const _FeatureBarTabs = withStyles(styles)(FeatureBarTabs);

// Connect to Router
export default withRouter(_FeatureBarTabs);
