import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Button, Typography, withStyles } from '@material-ui/core';

import styles from './styles';

const DataTableHeader = props => {
  const { classes, title, button, buttonLabel } = props;
  return (
    <header className={classes.root}>
      <Typography
        className={classes.title}
        variant="subtitle1"
        color="textSecondary">
        {title}
      </Typography>
      {button && (
        <Button variant="contained" color="primary">
          {buttonLabel}
        </Button>
      )}
    </header>
  );
};

DataTableHeader.defaultProps = {
  button: false,
  buttonLabel: 'Button'
};

DataTableHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.bool.isRequired,
  buttonLabel: PropTypes.string
};

// Apply styles
const _DataTableHeader = withStyles(styles)(DataTableHeader);

export default _DataTableHeader;
