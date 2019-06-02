import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Material UI
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  // Button,
  Tooltip,
  IconButton,
  withStyles
} from '@material-ui/core';

// Icons
import { Help } from '@material-ui/icons';
import { ArrowLeft } from 'react-feather';

import styles from './styles';

const FeatureBar = props => {
  const { classes, title, subtitle, history, back, help } = props;
  return (
    <AppBar component="div" color="primary" position="static" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Grid container alignItems="center" spacing={0}>
          <Grid item xs>
            {subtitle && (
              <div className={classes.subtitleContainer}>
                <Typography color="inherit" variant="body2">
                  {subtitle}
                </Typography>
              </div>
            )}
            <div className={classes.titleContainer}>
              {back && (
                <IconButton
                  color="inherit"
                  className={classes.backButton}
                  onClick={history.goBack}>
                  <ArrowLeft size={24} />
                </IconButton>
              )}
              <Typography color="inherit" variant="h5">
                {title}
              </Typography>
            </div>
          </Grid>
          {/* <Grid item>
            <Button
              className={classes.button}
              variant="outlined"
              color="inherit"
              size="small">
              Web Setup
            </Button>
          </Grid> */}
          {help && (
            <Grid item>
              <Tooltip title="Ayuda">
                <IconButton color="inherit">
                  <Help />
                </IconButton>
              </Tooltip>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

FeatureBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  history: PropTypes.object.isRequired,
  back: PropTypes.bool,
  help: PropTypes.bool
};

// Apply styles
const _FeatureBar = withStyles(styles)(FeatureBar);

// Connect to Router
export default withRouter(_FeatureBar);
