import React from 'react';
import styles from './styles';

// Material UI Components
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  TextField,
  Fab
} from '@material-ui/core';

import { Package, Plus } from 'react-feather';
import { withStyles } from '@material-ui/core/styles';

const ListItems = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <TextField
          styles={{ width: '100%' }}
          id="standard-name"
          className={classes.textField}
          margin="normal"
          placeholder="Buscar Producto"
        />
      </div>
      <List className={classes.list}>
        <ListItem>
          <Avatar>
            <Package />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Package />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Package />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Package />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Package />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Package />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Package />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Package />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Package />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <Plus className={classes.extendedIcon} />
        Añadir Nuevo
      </Fab>
    </div>
  );
};

export default withStyles(styles)(ListItems);
