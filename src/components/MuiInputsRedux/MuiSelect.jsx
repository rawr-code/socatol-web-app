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

const MuiSelect = props => {
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
        }}>
        {children ? children : <MenuItem value="">No hay registros.</MenuItem>}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};

export default MuiSelect;
