import React, { PureComponent, Fragment } from 'react';
import styles from './styles';

// MaterialUI
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  withStyles,
  Typography,
  CircularProgress
} from '@material-ui/core';
import classNames from 'classnames';

import { Package } from 'react-feather';
class ListItems extends PureComponent {
  render() {
    const { classes, data, onClick, isLoading } = this.props;
    return (
      <Fragment>
        <List
          className={classNames(classes.list, !data && classes.noData)}
          disablePadding
        >
          {isLoading ? (
            <div className={classes.loadingContainer}>
              <CircularProgress />
            </div>
          ) : data ? (
            data.map(item => {
              const { _id, name } = item;
              return (
                <ListItem
                  key={_id}
                  onClick={() => onClick(_id)}
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
            }) && <li className={classes.li} />
          ) : (
            <li>
              <Typography variant="body1">No hay registros.</Typography>
            </li>
          )}
        </List>
      </Fragment>
    );
  }
}

export default withStyles(styles)(ListItems);
