import React, { Component } from 'react';

// Material UI
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  TextField,
  MenuItem
} from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';

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

// component={FieldMaterialUI}
//             id="inputName"
//             name="Nombre"
//             label="Nombre"
//             margin="dense"
//             variant="outlined"
//             fullWidth
//             type="text"

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

export const FieldMaterialUISelect = props => {
  console.log(props);
  const {
    input,
    label,
    name,
    meta: { touched, error },
    options,
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
        {options &&
          options.map((item, index) => (
            <MenuItem key={`${item.name}_${index}`} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};
