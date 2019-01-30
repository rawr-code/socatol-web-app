import React, { PureComponent } from 'react';
import styles from './styles';

// MaterialUI
import {
  Paper,
  TextField,
  Button,
  CircularProgress,
  withStyles
} from '@material-ui/core';

// Components
import ListItems from './ListItems';
import Details from './Details';

class TableBoard extends PureComponent {
  render() {
    const { classes, listIsLoading, detailsIsLoading } = this.props;
    return (
      <Paper className={classes.paper}>
        <div className={classes.listItemRoot}>
          <div className={classes.searchBox}>
            <TextField
              id="standard-name"
              className={classes.searchBoxTextField}
              margin="normal"
              placeholder="Buscar Producto"
            />
          </div>
          <ListItems isLoading={listIsLoading} />
          <Button
            variant="contained"
            color="primary"
            className={classes.addBotton}
          >
            Añadir Producto
          </Button>
        </div>
        <Details isLoading={detailsIsLoading} />
      </Paper>
    );
  }
}

export default withStyles(styles)(TableBoard);
