import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './styles';

const MainContainer = ({ classes, children }) => (
  <main className={classes.root}>{children}</main>
);

export default withStyles(styles)(MainContainer);
