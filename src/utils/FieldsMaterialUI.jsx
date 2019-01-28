import React from 'react';

// Material UI
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  TextField,
  MenuItem
} from '@material-ui/core';

export const FieldMaterialUI = props => {
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

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

export const FieldMaterialUISelect = props => {
  const {
    input,
    label,
    name,
    children,
    meta: { touched, error },
    ...custom
  } = props;
  return (
    <FormControl error={touched && error} fullWidth>
      <InputLabel htmlFor={`input${input.name}`}>{label}</InputLabel>
      <Select
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: `input${input.name}`
        }}
      >
        {children ? children : <MenuItem value="">No hay registros.</MenuItem>}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};
