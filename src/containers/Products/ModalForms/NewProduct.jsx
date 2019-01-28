import React from 'react';
import styles from './styles';
import { Field, reduxForm } from 'redux-form';

import {
  FieldMaterialUI,
  FieldMaterialUISelect
} from '../../../utils/FieldsMaterialUI';

// Material UI
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  withStyles
} from '@material-ui/core';

const NewProduct = props => {
  const { classes, title, open, handleClose } = props;
  const options = [
    {
      name: 'Red',
      value: 'ff0000'
    },
    {
      name: 'Green',
      value: '00ff00'
    },
    {
      name: 'Blue',
      value: '0000ff'
    }
  ];
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      maxWidth="xs"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <form autoComplete="off">
          <Field
            className={classes.field}
            component={FieldMaterialUI}
            id="inputName"
            name="name"
            label="Nombre"
            margin="dense"
            fullWidth
            type="text"
          />
          <Field
            className={classes.field}
            component={FieldMaterialUI}
            id="inputDescription"
            name="description"
            label="Descripción"
            margin="dense"
            fullWidth
            type="text"
          />
          <Field
            className={classes.field}
            name="warehouse"
            component={FieldMaterialUISelect}
            label="Almacen"
            options={options}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
          style={{ textTransform: 'capitalize' }}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          style={{ textTransform: 'capitalize' }}
        >
          Añadir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default reduxForm({ form: 'newProduct' })(
  withStyles(styles)(NewProduct)
);
