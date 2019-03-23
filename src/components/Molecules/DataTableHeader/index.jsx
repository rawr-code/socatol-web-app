import React from 'react';
import styles from './styles';
import { Link } from 'react-router-dom';

// Material UI
import { Typography, Button, withStyles } from '@material-ui/core';

const HeaderDataTable = ({
  classes,
  img,
  title,
  subtitle,
  buttonLabel,
  button,
  buttonURL,
  match
}) => {
  return (
    <header className={classes.root}>
      <div className={classes.content}>
        <img
          alt="headerImage"
          src={
            img
              ? img
              : 'https://img.icons8.com/dusk/64/000000/merchant-account.png'
          }
          width={64}
          height={64}
        />
        <div className={classes.textContainer}>
          <Typography variant="h6" component="h1" className={classes.title}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.subtitle}>
            {subtitle}
          </Typography>
        </div>
      </div>

      {button && (
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          component={Link}
          to={buttonURL ? buttonURL : ''}>
          {buttonLabel}
        </Button>
      )}
    </header>
  );
};

export default withStyles(styles)(HeaderDataTable);
