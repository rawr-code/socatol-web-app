import React from 'react';
import { TextField, MenuItem, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import styles from './styles';

const InputField = props => {
  const { classes, dense, noMargin, select, children, ...rest } = props;
  const config = {
    className:
      rest.variant === 'outlined'
        ? classNames(!noMargin && classes.root, dense && classes.dense)
        : classNames(!noMargin && classes.root, dense && classes.outLinedDense),
    margin: dense ? 'dense' : 'normal'
  };
  const input = select ? (
    <TextField {...config} {...rest} select>
      {children ? (
        children
      ) : (
        <MenuItem disabled value="">
          No hay registros
        </MenuItem>
      )}
    </TextField>
  ) : (
    <TextField {...config} {...rest} />
  );
  return input;
};

export default withStyles(styles)(InputField);
