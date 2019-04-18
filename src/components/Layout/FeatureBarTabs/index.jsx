import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { AppBar, Tabs, Tab, withStyles } from '@material-ui/core';

// Layout
import MainContainer from '../MainContainer';

import styles from './styles';

class FeatureBarTabs extends Component {
  state = {
    value: 0
  };

  handleOnChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, tabs } = this.props;
    const { value } = this.state;
    const ContentTab = tabs[value].component;
    return (
      <>
        <AppBar
          component="div"
          className={classes.root}
          color="primary"
          position="static"
          elevation={0}>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={this.handleOnChange}>
            {tabs.map(item => (
              <Tab
                textColor="inherit"
                label={item.label}
                className={classes.root}
                key={item.label}
              />
            ))}
          </Tabs>
        </AppBar>
        <MainContainer>{ContentTab && <ContentTab />}</MainContainer>
      </>
    );
  }
}

FeatureBarTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  tabs: PropTypes.array.isRequired
};

// Apply styles
const _FeatureBarTabs = withStyles(styles)(FeatureBarTabs);

export default _FeatureBarTabs;
