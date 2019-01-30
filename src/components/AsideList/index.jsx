import React, { PureComponent } from 'react';

// MaterialUI
import {
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  withStyles
} from '@material-ui/core';
import { Package } from 'react-feather';

import styles from './styles';

class AsideList extends PureComponent {
  render() {
    const { classes, data, onClick } = this.props;
    const listItems = data ? (
      data.map(item => {
        const { _id, name } = item;
        return (
          <ListItem
            key={_id}
            onClick={() => onClick(item)}
            className={classes.listItem}
          >
            <Avatar className={classes.avatar}>
              <Package />
            </Avatar>
            <ListItemText
              primary={name}
              secondary="Tipo: Biologico"
              classes={{ root: classes.listItemText }}
            />
          </ListItem>
        );
      })
    ) : (
      <Typography variant="body1" component="li">
        No hay registros.
      </Typography>
    );
    return (
      <div className={classes.root}>
        <div className={classes.searchBox}>
          <TextField
            id="standard-name"
            className={classes.searchBoxTextField}
            margin="normal"
            placeholder="Buscar Producto"
          />
        </div>
        <List className={classes.list} disablePadding>
          {listItems}
        </List>
        <Button
          variant="contained"
          color="primary"
          className={classes.addBotton}
        >
          Añadir Producto
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(AsideList);
