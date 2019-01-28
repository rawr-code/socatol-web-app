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
  MenuItem,
  withStyles
} from '@material-ui/core';

const NewProduct = props => {
  const {
    classes,
    title,
    open,
    handleClose,
    inputSelectOptions,
    handleSubmit,
    pristine,
    submitting
  } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      maxWidth="xs"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <DialogContent>
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
            name="warehouseId"
            component={FieldMaterialUISelect}
            label="Almacen"
          >
            {inputSelectOptions &&
              inputSelectOptions.length > 0 &&
              inputSelectOptions.map(item => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
          </Field>
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
            type="submit"
            color="primary"
            variant="contained"
            style={{ textTransform: 'capitalize' }}
            disabled={pristine || submitting}
          >
            Añadir
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default reduxForm({ form: 'newProduct' })(
  withStyles(styles)(NewProduct)
);
