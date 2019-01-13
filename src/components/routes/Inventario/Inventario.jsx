import React, { Fragment, Component } from "react";

// MaterialUI Components

import SwipeableViews from "react-swipeable-views";

import { BoardTabs } from "Molecules";
import { MiniCardBoard } from "Organisms";

class Inventario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    const { warehouse } = actions;
    console.log(actions, warehouse);
    warehouse.GET_ALL();
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { value } = this.state;
    const { selectedTabIndex, handleChangeTab, almacenes } = this.props;
    const tabs = [
      {
        title: "Productos"
      },
      {
        title: "Proveedores"
      }
    ];
    return (
      <Fragment>
        <BoardTabs data={tabs} value={value} handleChange={this.handleChange} />
        <SwipeableViews
          axis="x"
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <MiniCardBoard />
          <MiniCardBoard />
        </SwipeableViews>
      </Fragment>
    );
  }
}

export default Inventario;
