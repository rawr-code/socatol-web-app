import React from 'react';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';
import classNames from 'classnames';

// Material UI
import {
  Typography,
  TextField,
  Paper,
  Chip,
  MenuItem,
  withStyles
} from '@material-ui/core';

import { Cancel } from '@material-ui/icons';

import styles from './styles';

// Components

const NoOptionsMessage = props => {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}>
      {props.children}
    </Typography>
  );
};

const inputComponent = ({ inputRef, ...props }) => {
  return <div ref={inputRef} {...props} />;
};

const Control = props => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
};

const Option = props => {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}>
      {props.children}
    </MenuItem>
  );
};

const Placeholder = props => {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}>
      {props.children}
    </Typography>
  );
};

const SingleValue = props => {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}>
      {props.children}
    </Typography>
  );
};

const ValueContainer = props => {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
};

const MultiValue = props => {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<Cancel {...props.removeProps} />}
    />
  );
};

const Menu = props => {
  return (
    <Paper className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
};

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

const SelectField = props => {
  const { classes, theme, handleChange, label, ...selectProps } = props;
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit'
      }
    })
  };
  return (
    <Select
      classes={classes}
      styles={selectStyles}
      textFieldProps={{
        label,
        InputLabelProps: {
          shrink: true
        }
      }}
      menuPosition="fixed"
      components={Animated(components)}
      onChange={handleChange}
      {...selectProps}
    />
  );
};

export default withStyles(styles, { withTheme: true })(SelectField);
