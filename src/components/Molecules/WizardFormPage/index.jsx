import React from 'react';
import { Card, Typography, IconButton, withStyles } from '@material-ui/core';
import { ArrowLeft } from 'react-feather';

import styles from './styles';

const WizardFormPage = props => {
  const { classes, previousPage, nextPage, title, children, noPadding } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <header className={classes.cardHeader}>
          {previousPage && (
            <IconButton
              className={classes.cardHeaderButtonLeft}
              color="primary"
              onClick={previousPage}>
              <ArrowLeft size={24} />
            </IconButton>
          )}
          <Typography
            className={classes.cardHeaderTitle}
            variant="h6"
            component="p"
            color="textPrimary">
            {title}
          </Typography>
          {nextPage && (
            <IconButton
              className={classes.cardHeaderButtonRight}
              color="primary"
              onClick={nextPage}>
              <ArrowLeft size={24} />
            </IconButton>
          )}
        </header>
        <div className={noPadding ? '' : classes.cardPadding}>{children}</div>
      </Card>
    </div>
  );
};

export default withStyles(styles)(WizardFormPage);
