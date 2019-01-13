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
    const data = [
      {
        title: "Shrimp and Chorizo Paella",
        description: "September 14, 2016"
      },
      {
        title: "Shrimp and Chorizo Paella",
        description: "September 14, 2016"
      },
      {
        title: "Shrimp and Chorizo Paella",
        description: "September 14, 2016"
      },
      {
        title: "Shrimp and Chorizo Paella",
        description: "September 14, 2016"
      },
      {
        title: "Shrimp and Chorizo Paella",
        description: "September 14, 2016"
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
          <MiniCardBoard data={data} />
          <MiniCardBoard />
        </SwipeableViews>
      </Fragment>
    );
  }
}

export default Inventario;
