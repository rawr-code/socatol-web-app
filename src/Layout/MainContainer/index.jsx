import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core';

import styles from './styles';

const MainContainer = props => {
  const { classes, children } = props;
  return <main className={classes.root}>{children}</main>;
};

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

// Apply styles
const _MainContainer = withStyles(styles)(MainContainer);

export default _MainContainer;
