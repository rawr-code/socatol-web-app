import React from 'react';

import Formsy from 'formsy-react';

// Material UI
import {
  Grid,
  CardContent,
  MenuItem
  // FormControlLabel,
  // Checkbox,
  // FormHelperText,
  // FormControl,
  // FormLabel,
  // Typography
} from '@material-ui/core';

// Atoms
import InputField from '../../../components/Atoms/InputField';

const InvoiceDetailsForm = props => {
  const { handleChange, data } = props;
  return (
    <Formsy autoComplete="off" onChange={handleChange}>
      <CardContent style={{ minWidth: 450, maxWidth: 600 }}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <InputField
              label="Metodo de pago"
              name="paymentType"
              value={data && data.paymentType ? data.paymentType : null}
              fullWidth
              dense
              required
              select>
              <MenuItem value="EFECTIVO">Efectivo</MenuItem>
              <MenuItem value="TRANSFERENCIA">Transferencia</MenuItem>
            </InputField>
          </Grid>
          <Grid item xs={12}>
            <InputField
              label="Numero de la factura"
              name="number"
              type="number"
              placeholder="Numero de la factura"
              fullWidth
              required
              value={data && data.number ? data.number : null}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              label="Numero de referencia bancaria"
              name="ref"
              type="number"
              placeholder="Numero de referencia bancaria"
              fullWidth
              required
              value={data && data.ref ? data.ref : null}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              label="Notas adicionales"
              name="notes"
              placeholder="Información adicional sobre la factura"
              value={data && data.notes ? data.notes : null}
              multiline
              rows="4"
              rowsMax="4"
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dispatch}
                      onChange={handleChange}
                      value={'dispatch'}
                      name="dispatch"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="body2" component="label">
                      Retirado
                    </Typography>
                  }
                />
                <FormHelperText style={{ marginLeft: 8 }}>
                  Deshabilite esta opción si el pedido no será retirado al
                  generar la factura
                </FormHelperText>
              </FormControl>
            </Grid> */}
        </Grid>
      </CardContent>
    </Formsy>
  );
};

// connect to router
export default InvoiceDetailsForm;
