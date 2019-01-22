import React, { Fragment, Component } from 'react';

// MaterialUI Components
import { Typography } from '@material-ui/core';
// Warehouse Forms
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class Inventario extends Component {
  componentDidMount() {
    const { actions } = this.props;
    const { warehouse } = actions;
    warehouse.GET_ALL();
  }

  render() {
    return (
      <Fragment>
        <div>
          <div>
            <Typography> title</Typography>
            <Typography> subtitle</Typography>
          </div>
        </div>
        <div>segundo</div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Inventario);
