import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { Typography, Card, withStyles } from '@material-ui/core';
import classNames from 'classnames';

import styles from './styles';

const FormMaterial = props => {
  const { classes, title, subtitle, children } = props;
  const { sm, md } = props;
  return (
    <div
      className={classNames(classes.root, sm && classes.sm, md && classes.md)}>
      <div className={classes.textWrapper}>
        <Typography component="h5" variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.subtitle}>
          {subtitle}
        </Typography>
      </div>
      <Card className={classes.card}>{children}</Card>
    </div>
  );
};

FormMaterial.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

// Apply styles
const _FormMaterial = withStyles(styles)(FormMaterial);

export default _FormMaterial;
