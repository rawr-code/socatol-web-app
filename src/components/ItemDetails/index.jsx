import React from 'react';
import styles from './styles';

// Material UI Components
import { Typography, Tabs, Tab, Zoom, Fab } from '@material-ui/core';
import { Add, Edit, PersonAdd } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

class ItemDetails extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };
    const fabs = [
      {
        name: 'edit',
        icon: <Edit />
      },
      {
        name: 'add',
        icon: <Add />
      },
      {
        name: 'personAdd',
        icon: <PersonAdd />
      }
    ];

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
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.name}
            in={this.state.value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${
                this.state.value === index ? transitionDuration.exit : 0
              }ms`
            }}
            unmountOnExit
          >
            <Fab color="primary" className={classes.fab}>
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ItemDetails);
