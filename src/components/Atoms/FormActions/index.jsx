import React from 'react';

import { CardActions, withStyles } from '@material-ui/core';

import styles from './styles';

const FormActions = props => {
  const { classes, children } = props;
  return <CardActions className={classes.root}>{children}</CardActions>;
};

export default withStyles(styles)(FormActions);
