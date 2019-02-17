import React from 'react';
import styles from './styles';

//  Material UI
import { Typography, withStyles } from '@material-ui/core';

const HeaderImage = ({ classes, img, title, subtitle }) => {
  return (
    <header className={classes.root}>
      <img
        src={
          img
            ? img
            : 'https://img.icons8.com/dusk/64/000000/merchant-account.png'
        }
        className={classes.image}
      />
      <div className={classes.textContainer}>
        <Typography variant="h6" component="h1" className={classes.title}>
          {title ? title : 'Tesorería'}
        </Typography>
        <Typography variant="body1" component="p" className={classes.subtitle}>
          {subtitle ? subtitle : 'Listado de cuentas bancarias'}
        </Typography>
      </div>
    </header>
  );
};

export default withStyles(styles)(HeaderImage);
