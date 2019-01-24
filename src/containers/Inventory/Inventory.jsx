import React, { Component } from 'react';
import styles from './styles';

// Material UI Components
import { Grid, Typography, Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import Prueba from './List';

class Inventory extends Component {
  render() {
    const data = [
      {
        name: 'primero',
        description: 'descripcion'
      },
      {
        name: 'segundo',
        description: 'descripcion'
      },
      {
        name: 'tercero',
        description: 'descripcion'
      },
      {
        name: 'cuarto',
        description: 'descripcion'
      }
    ];
    const { classes } = this.props;
    return (
      <Grid container spacing={0}>
        <Grid item xs={3} className={classes.selectList}>
          <header className={classes.selectListHeader}>
            <Typography variant="h6" className={classes.selectListHeaderTitle}>
              Almacenes
            </Typography>
            <Button variant="contained" color="primary">
              Seleccionar todos
            </Button>
          </header>
          <List className={classes.list}>
            <ListItem>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="primary"
            className={classes.footerBotton}
          >
            Añadir Almacen
          </Button>
        </Grid>
        <Grid item xs={9}>
          <header className={classes.selectListHeader}>
            <Typography variant="h6" className={classes.selectListHeaderTitle}>
              Productos
            </Typography>
            <Button variant="contained" color="primary">
              Añadir Producto
            </Button>
          </header>
          <Prueba data={data} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Inventory);
