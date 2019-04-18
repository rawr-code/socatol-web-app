import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Typography, withStyles } from '@material-ui/core';

import styles from './styles';

const FormHeader = props => {
  const { classes, title, subtitle } = props;
  return (
    <header className={classes.root}>
      <Typography component="h5" variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.subtitle}>
        {subtitle}
      </Typography>
    </header>
  );
};

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};
// Apply styles
const _FormHeader = withStyles(styles)(FormHeader);

export default _FormHeader;
