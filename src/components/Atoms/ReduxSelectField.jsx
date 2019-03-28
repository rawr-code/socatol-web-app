import React from 'react';

// Material UI
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem
} from '@material-ui/core';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const ReduxSelecField = props => {
  const {
    input,
    label,
    name,
    children,
    options,
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
        }}>
        {options ? (
          options.map((option, index) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="">No hay registros.</MenuItem>
        )}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};

export default ReduxSelecField;
