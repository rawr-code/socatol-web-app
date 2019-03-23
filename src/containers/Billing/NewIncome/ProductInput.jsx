import React from 'react';
import { Field } from 'redux-form';
import styles from './styles';

// Material UI
import { Grid, IconButton, withStyles } from '@material-ui/core';

// Components
import { TextField } from '../../../components/MuiInputsRedux';

// Icons
import { X } from 'react-feather';

const ProductInput = props => {
  const { classes, name, handleRemove } = props;
  return (
    <Grid container alignItems="center">
      <Grid item xs={5}>
        <Field
          className={classes.field}
          component={TextField}
          id="product"
          name={`${name}.product`}
          label="Nombre del producto"
          margin="dense"
          type="text"
          fullWidth
        />
      </Grid>
      <Grid item xs={1}>
        <Field
          className={classes.field}
          component={TextField}
          id="quantity"
          name={`${name}.quantity`}
          label="Cantidad"
          margin="dense"
          type="number"
        />
      </Grid>
      <Grid item xs={2}>
        <Field
          className={classes.field}
          component={TextField}
          id="price"
          name={`${name}.price`}
          label="Precio"
          margin="dense"
          type="number"
        />
      </Grid>
      <Grid item xs={1}>
        <Field
          className={classes.field}
          component={TextField}
          id="iva"
          name={`${name}.iva`}
          label="IVA%"
          margin="dense"
          type="number"
        />
      </Grid>
      <Grid item xs={2}>
        <Field
          className={classes.field}
          component={TextField}
          id="total"
          name={`${name}.total`}
          label="Total"
          margin="dense"
          type="number"
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={handleRemove}>
          <X />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProductInput);
