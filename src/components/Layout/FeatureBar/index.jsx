import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
  Tooltip,
  IconButton,
  withStyles
} from '@material-ui/core';

// Icons
import { Help } from '@material-ui/icons';

import styles from './styles';

const FeatureBar = props => {
  const { classes, title } = props;
  return (
    <AppBar component="div" color="primary" position="static" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Grid container alignItems="center" spacing={0}>
          <Grid item xs>
            <Typography color="inherit" variant="h5">
              {title}
            </Typography>
          </Grid>
          {/* <Grid item>
            <Button
              className={classes.button}
              variant="outlined"
              color="inherit"
              size="small">
              Web setup
            </Button>
          </Grid>
          <Grid item>
            <Tooltip title="Ayuda">
              <IconButton color="inherit">
                <Help />
              </IconButton>
            </Tooltip>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

FeatureBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

// Apply styles
const _FeatureBar = withStyles(styles)(FeatureBar);

export default _FeatureBar;
