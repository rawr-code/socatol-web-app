import React from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import styles from './styles';

// Material UI
import {
  Grid,
  Button,
  Typography,
  MenuItem,
  Divider,
  withStyles
} from '@material-ui/core';

// Components
import {
  InlineDatePicker,
  TextField,
  Select
} from '../../../components/MuiInputsRedux';

import ProductInput from './ProductInput';

const renderProducts = ({ fields, meta: { touched, error, submitFailed } }) => (
  <div>
    {fields.map((product, index) => (
      <ProductInput
        key={index}
        name={product}
        handleRemove={() => fields.remove(index)}
      />
    ))}
    <Button color="primary" fullWidth onClick={() => fields.push({})}>
      Añadir producto
    </Button>
    {(touched || submitFailed) && error && <span>{error}</span>}
  </div>
);

let Form = props => {
  const { classes, handleSubmit, state } = props;
  let subTotal = 0;
  let ivaTotal = 0;
  state.products &&
    state.products.forEach(({ quantity, price, iva }) => {
      const value = Number(quantity) * Number(price);
      const valueIva = Number(value * Number(`0.${iva}`));

      if (value > 0) {
        subTotal += value;
        if (valueIva > 0) ivaTotal += valueIva;
      }
    });
  let total = subTotal + ivaTotal;

  return (
    <form autoComplete="off" onSubmit={handleSubmit} style={{ padding: 24 }}>
      <Grid container spacing={24} direction="column">
        <Grid item md={6}>
          <Typography variant="h6">Datos de la factura</Typography>
          <Field
            component={InlineDatePicker}
            onlyCalendar
            label="Fecha de emisión"
            name="date"
            className={classes.field}
          />
          <Field
            component={InlineDatePicker}
            onlyCalendar
            label="Fecha de vencimiento"
            name="date1"
            className={classes.field}
          />
        </Grid>
      </Grid>
      <Divider style={{ margin: '24px 0' }} />
      <Grid container spacing={24} direction="column">
        <Grid item md={12}>
          <Typography variant="h6">Datos del cliente</Typography>
          <Grid container spacing={24}>
            <Grid item xs={2}>
              <Field
                className={classes.field}
                component={TextField}
                id="inputName"
                name="Name"
                label="Nombre"
                margin="dense"
                type="text"
              />
            </Grid>
            <Grid item xs={2}>
              <Field
                className={classes.field}
                component={TextField}
                id="inputName"
                name="lastname"
                label="Apellido"
                margin="dense"
                type="text"
              />
            </Grid>
            <Grid item xs={4}>
              <Field
                className={classes.field}
                component={TextField}
                id="inputName"
                name="direction"
                label="Dirección"
                margin="dense"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <Field
                className={classes.field}
                component={TextField}
                id="inputName"
                name="phone"
                label="Telefono"
                margin="dense"
                type="text"
              />
            </Grid>
            {/* <Button color="primary">Añadir nuevo cliente</Button> */}
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ margin: '24px 0' }} />
      <Grid container spacing={24} direction="column">
        <Grid item xs={12}>
          <Typography variant="h6">Lista de productos</Typography>
          <FieldArray name="products" component={renderProducts} />
        </Grid>
      </Grid>
      <Divider style={{ margin: '24px 0' }} />
      <Grid container spacing={24}>
        <Grid item md={4}>
          <Typography variant="h6">Detalles adicionales</Typography>

          <Field
            className={classes.field}
            name="paydMethod"
            component={Select}
            label="Metodo de pago">
            <MenuItem value="efectivo">Efectivo</MenuItem>
            <MenuItem value="transferencia">Transferencia</MenuItem>
          </Field>
        </Grid>
        <Grid item md={4} />
        <Grid item md={4}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Typography variant="subtitle1">SubTotal:</Typography>
            <Typography variant="subtitle1">{subTotal} Bs</Typography>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Typography variant="subtitle1">IVA 12%:</Typography>
            <Typography variant="subtitle1">{ivaTotal} Bs</Typography>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6">{total} Bs</Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={24} justify="flex-end">
        <Grid item>
          <Button color="primary">Limpiar campos</Button>
          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

Form = reduxForm({ form: 'NewIncome' })(withStyles(styles)(Form));

// Decorate with connect to read form values
const selector = formValueSelector('NewIncome'); // <-- same as form name
Form = connect(state => {
  const products = selector(state, 'products');
  // or together as a group
  // const { firstName, lastName } = selector(state, 'date', 'date1');
  return {
    state: {
      products
    }
  };
})(Form);

export default Form;
