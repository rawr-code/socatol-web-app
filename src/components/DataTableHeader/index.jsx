import React from 'react';
import styles from './styles';

// Material UI
import { Typography, Button, withStyles } from '@material-ui/core';

const HeaderDataTable = ({ classes, title, subtitle, bottonLabel }) => {
  return (
    <header className={classes.root}>
      <div>
        <Typography variant="h6" component="h1" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" component="p" className={classes.subtitle}>
          {subtitle}
        </Typography>
      </div>

      <Button color="primary" variant="contained" className={classes.button}>
        {bottonLabel}
      </Button>
    </header>
  );
};

export default withStyles(styles)(HeaderDataTable);
