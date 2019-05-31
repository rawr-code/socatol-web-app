import React from 'react';
import { TextField, MenuItem, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import styles from './styles';
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
    />
  );
}

const InputFieldOld = props => {
  let {
    classes,
    dense,
    select,
    children,
    mr,
    ml,
    isNumber,
    InputProps,
    ...rest
  } = props;
  const config = {
    className:
      rest.variant === 'outlined' &&
      classNames(
        classes.root,
        dense && classes.outLinedDense,
        mr && classes.mr,
        ml && classes.ml
      ),
    inputProps: {
      className: isNumber && classes.tRight
    }
  };
  if (isNumber) {
    InputProps = { ...InputProps, inputComponent: NumberFormatCustom };
  }
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
    <TextField {...config} {...rest} InputProps={InputProps} />
  );
  return input;
};

export default withStyles(styles)(InputFieldOld);
