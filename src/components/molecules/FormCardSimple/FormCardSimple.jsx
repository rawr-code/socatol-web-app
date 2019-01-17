import React from 'react';

// MaterialUI Components
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
  Button,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const FormCardSimple = props => {
  const { classes, open, handleClose, title, subtitle, children } = props;
  return (
    <Dialog
      fullScreen={false}
      open={open}
      onClose={handleClose}
      aria-labelledby={`dialog_${title}_${subtitle}`}
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id={`dialog_${title}_${subtitle}`} disableTypography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {subtitle}
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          autoFocus
        >
          Registrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(FormCardSimple);
