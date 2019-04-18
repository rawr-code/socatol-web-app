import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material UI
import { Button, Typography, withStyles } from '@material-ui/core';

import styles from './styles';

const DataTableHeader = props => {
  const { classes, title, button } = props;
  return (
    <header className={classes.root}>
      <Typography
        className={classes.title}
        variant="subtitle1"
        color="textSecondary">
        {title}
      </Typography>
      {button && (
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={button.to}>
          {button.label}
        </Button>
      )}
    </header>
  );
};

DataTableHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.object
};

// Apply styles
const _DataTableHeader = withStyles(styles)(DataTableHeader);

export default _DataTableHeader;
