import React from 'react';
import styles from './styles';

// Material UI Components
import { Typography, Tabs, Tab } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

class ItemDetails extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <header className={classes.header}>
          <Typography variant="h5">Details</Typography>
        </header>
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Información" disableRipple />
          <Tab label="Presentaciones" disableRipple />
          <Tab label="Proveedores" disableRipple />
        </Tabs>
        <div style={{ padding: 20 }}>
          {value === 0 && <div>Item One</div>}
          {value === 1 && <div>Item Two</div>}
          {value === 2 && <div>Item Three</div>}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ItemDetails);
