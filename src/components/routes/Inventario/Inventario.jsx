import React, { Fragment, Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

// MaterialUI Components
// import { Typography } from "@material-ui/core";

// Warehouse Forms
import { withStyles } from '@material-ui/core/styles';

import { BoardTabs, FormCardSimple } from 'Molecules';
import MiniCardBoard from 'Organisms';
import WarehouseForms from './forms';

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
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      open: false,
      type: 'new',
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    const { warehouse } = actions;
    warehouse.GET_ALL();
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { value, type, open } = this.state;
    const { InventoryManagement } = this.props;
    const { Warehouse } = InventoryManagement;

    const tabs = [
      {
        title: 'Almacenes',
      },
      {
        title: 'Productos',
      },
      {
        title: 'Proveedores',
      },
    ];
    return (
      <Fragment>
        <header>
          {/* <InfoHeader /> */}
          <BoardTabs
            data={tabs}
            value={value}
            handleChange={this.handleChange}
          />
        </header>
        <FormCardSimple
          open={open}
          handleClose={this.handleClose}
          title="Almacen"
          subtitle="Nuevo Registro"
        >
          {type === 'new' && <WarehouseForms.NEW />}
          {/* {type === "details" && "details"}
          {type === "update" && "update"} */}
        </FormCardSimple>
        <SwipeableViews
          axis="x"
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <MiniCardBoard
            avatar="home"
            data={Warehouse.warehouses}
            onClick={this.handleClickOpen}
          />
          <MiniCardBoard avatar="box" data={Warehouse.warehouses} />
          <MiniCardBoard avatar="user" data={Warehouse.warehouses} />
        </SwipeableViews>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Inventario);
