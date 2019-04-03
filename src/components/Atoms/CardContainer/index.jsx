import React from 'react';
import { Card, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import styles from './styles';

const CardContainer = props => {
  const { classes, children, className, ...rest } = props;
  return (
    <Card className={classNames(classes.root, className)} {...rest}>
      {children}
    </Card>
  );
};

export default withStyles(styles)(CardContainer);
