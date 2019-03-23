import React from 'react';

// Material UI
import { TextField } from '@material-ui/core';

const MuiTextField = props => {
  const {
    input,
    meta: { touched, invalid, error }
  } = props;
  return (
    <TextField
      {...props}
      {...input}
      error={touched && invalid}
      helperText={touched && error}
    />
  );
};

export default MuiTextField;
