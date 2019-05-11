import React from 'react';
import { TextField, MenuItem, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import styles from './styles';

const InputFieldOld = props => {
  const { classes, dense, select, children, mr, ml, ...rest } = props;
  const config = {
    className:
      rest.variant === 'outlined' &&
      classNames(
        classes.root,
        dense && classes.outLinedDense,
        mr && classes.mr,
        ml && classes.ml
      )
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

export default withStyles(styles)(InputFieldOld);
