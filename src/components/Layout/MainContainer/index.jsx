import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core';

import styles from './styles';

const MainContainer = props => {
  const { classes, children } = props;
  return <main className={classes.root}>{children}</main>;
};

// Apply styles
const _MainContainer = withStyles(styles)(MainContainer);

export default _MainContainer;
