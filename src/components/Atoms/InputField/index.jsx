import React from 'react';
import { TextField, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import styles from './styles';

const InputField = props => {
  const { classes, dense, noMargin, ...rest } = props;
  const config = {
    className:
      rest.variant === 'outlined'
        ? classNames(!noMargin && classes.root, dense && classes.dense)
        : classNames(!noMargin && classes.root, dense && classes.outLinedDense),
    margin: dense ? 'dense' : 'normal'
  };
  return <TextField {...config} {...rest} />;
};

export default withStyles(styles)(InputField);
