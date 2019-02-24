import React from 'react';
import styles from './styles';
import { Field, reduxForm } from 'redux-form';

import {
  FieldMaterialUI,
  FieldMaterialUISelect
} from '../../../utils/FieldsMaterialUI';

// Material UI
import {
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
  withStyles
} from '@material-ui/core';

const NewProduct = props => {
  const {
    classes,
    handleClose,
    handleSubmit,
    pristine,
    submitting,
    warehouses
  } = props;
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit} model="product">
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
            value="emma"
          />
          <Field
            className={classes.field}
            component={FieldMaterialUI}
            id="inputStock"
            name="stock"
            label="Stock"
            margin="dense"
            fullWidth
            type="number"
          />
          <Field
            className={classes.field}
            component={FieldMaterialUI}
            id="inputPrice"
            name="price"
            label="Precio"
            margin="dense"
            fullWidth
            type="number"
          />
          <Field
            className={classes.field}
            component={FieldMaterialUI}
            id="inputIVA"
            name="iva"
            label="IVA"
            margin="dense"
            fullWidth
            type="number"
          />
          <Field
            className={classes.field}
            name="warehouseId"
            component={FieldMaterialUISelect}
            label="Almacen">
            {warehouses &&
              warehouses.length > 0 &&
              warehouses.map(item => (
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
            style={{ textTransform: 'capitalize' }}>
            Cancelar
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ textTransform: 'capitalize' }}
            disabled={pristine || submitting}>
            Añadir
          </Button>
        </DialogActions>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'newProduct' })(
  withStyles(styles)(NewProduct)
);
