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
  const { classes } = props;
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
        <ListItem>
          <Avatar className={classes.avatar}>
            <Package />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
            <Package />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
            <Package />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
            <Package />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
            <Package />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
            <Package />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
            <Package />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
            <Package />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <Avatar className={classes.avatar}>
            <Package />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        <li className={classes.li} />
      </List>
      <Button variant="contained" color="primary" className={classes.addBotton}>
        Añadir Producto
      </Button>
    </div>
  );
};

export default withStyles(styles)(ListItems);
