import React from 'react';

// MaterialUI Components
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const InfoHeader = props => {
  const { classes } = props;
  const img = 'https://img.icons8.com/dusk/64/000000/warehouse.png';
  return (
    <div className={classNames(classes.container, classes.root)}>
      <div className={classes.container}>
        <img src={img} alt="img" />
        <div>
          <Typography variant="h6" component="h2">
            Gestion de Inventario
          </Typography>
          <Typography variant="body2" component="p">
            Listado de almacenes, productos y proveedores.
          </Typography>
        </div>
      </div>
      <div>aja</div>
    </div>
  );
};

export default withStyles(styles)(InfoHeader);
