import React from 'react';
import styles from './styles';

// MateriaulUI
import { Typography, CircularProgress, withStyles } from '@material-ui/core';

const Details = props => {
  const { classes, isLoading } = props;
  return (
    <div className={classes.root}>
      {isLoading ? (
        <div className={classes.loadingContainer}>
          <CircularProgress size={56} />
        </div>
      ) : (
        <header>
          <Typography variant="h5">Title</Typography>
        </header>
      )}
    </div>
  );
};

export default withStyles(styles)(Details);
