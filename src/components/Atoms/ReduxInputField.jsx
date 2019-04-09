import React from 'react';

// Atoms
import InputField from './InputField';

const ReduxMuiTextField = props => {
  const {
    input,
    meta: { touched, invalid, error },
    ...rest
  } = props;
  return (
    <InputField
      {...rest}
      {...input}
      error={touched && invalid}
      helperText={touched && error}
    />
  );
};

export default ReduxMuiTextField;
