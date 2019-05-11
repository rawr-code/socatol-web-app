import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Typography, withStyles } from '@material-ui/core';

import styles from './styles';

const ContentHeader = props => {
  const { classes, title, children } = props;
  return (
    <header className={classes.root}>
      <Typography
        className={classes.title}
        variant="subtitle1"
        color="textSecondary">
        {title}
      </Typography>
      <div>{children}</div>
    </header>
  );
};

ContentHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

// Apply styles
const _ContentHeader = withStyles(styles)(ContentHeader);

export default _ContentHeader;
