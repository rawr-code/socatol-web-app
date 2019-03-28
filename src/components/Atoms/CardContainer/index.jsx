import React from 'react';
import { Card, withStyles } from '@material-ui/core';

import styles from './styles';

const CardContainer = props => {
  const { classes, children, ...rest } = props;
  return (
    <Card className={classes.root} {...rest}>
      {children}
    </Card>
  );
};

export default withStyles(styles)(CardContainer);
