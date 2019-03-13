import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './styles';

const MainContainer = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(MainContainer);
