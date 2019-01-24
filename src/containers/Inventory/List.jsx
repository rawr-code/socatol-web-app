import React from 'react';

// Material UI Components
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Divider,
  Button,
  Typography
} from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import Prueba1 from './Table';

const styles = theme => ({
  root: {
    padding: 24
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes, data } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        {data.map((item, i) => {
          const { name, description } = item;
          return (
            <ExpansionPanel
              key={i}
              expanded={expanded === name}
              onChange={this.handleChange(name)}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.heading}>{name}</Typography>
                <Typography className={classes.secondaryHeading}>
                  {description}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography> */}
                <Prueba1 />
              </ExpansionPanelDetails>
              {/* <Divider /> */}
              <ExpansionPanelActions>
                <Button size="small">Eliminar</Button>
                <Button size="small" color="primary">
                  Editar
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(ControlledExpansionPanels);
