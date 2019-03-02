import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function FolderList(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        {/* <Avatar>
          <ImageIcon />
        </Avatar> */}
        <ListItemText primary="Producto 1" secondary="Veneno" />
        <div style={{ maxWidth: 70 }}>
          <TextField
            id="standard-name2"
            label="Cantidad"
            // value={7}
            margin="normal"
          />
        </div>
      </ListItem>
    </List>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderList);
