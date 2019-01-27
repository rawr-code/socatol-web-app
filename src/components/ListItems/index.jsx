import React from 'react';
import styles from './styles';

// Material UI Components
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  TextField,
  Button
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import { Package } from 'react-feather';

const ListItems = props => {
  const { classes, data } = props;
  return (
    <div className={classes.root}>
      <div className={classes.searchBox}>
        <TextField
          styles={{ width: '100%' }}
          id="standard-name"
          className={classes.searchBoxTextField}
          margin="normal"
          placeholder="Buscar Producto"
        />
      </div>
      <List className={classes.list}>
        {data &&
          data.map(item => {
            const { _id, name } = item;
            return (
              <ListItem key={_id}>
                <Avatar className={classes.avatar}>
                  <Package />
                </Avatar>
                <ListItemText primary={name} secondary="Tipo: Biologico" />
              </ListItem>
            );
          })}
        <li className={classes.li} />
      </List>
      <Button variant="contained" color="primary" className={classes.addBotton}>
        Añadir Producto
      </Button>
    </div>
  );
};

export default withStyles(styles)(ListItems);
