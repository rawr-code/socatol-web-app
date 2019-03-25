import React from 'react';
import { Card, withStyles } from '@material-ui/core';

import styles from './styles';

const CardContainer = props => {
  const { classes, children } = props;
  return <Card className={classes.root}>{children}</Card>;
};

export default withStyles(styles)(CardContainer);
