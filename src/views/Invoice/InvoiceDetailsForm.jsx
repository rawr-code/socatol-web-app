import React from 'react';

// Material UI
import { Grid, CardContent, Button, MenuItem } from '@material-ui/core';

// Layout
import MainContainer from '../../components/Layout/MainContainer';

// Atoms
import InputField from '../../components/Atoms/InputField';

// Organisms
import { FormMaterial } from '../../components/Organisms';

const InvoiceDetailsForm = props => {
  const { handleChange, back, data, onSubmit } = props;
  const { paymentType, note } = data;
  return (
    <MainContainer>
      <FormMaterial
        title={'Detalles'}
        subtitle="Información adicional de la factura"
        actions={
          <>
            <Button color="primary" onClick={back}>
              Volver
            </Button>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Guardar
            </Button>
          </>
        }>
        <CardContent>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <InputField
                variant="outlined"
                label="Metodo de pago"
                name="paymentType"
                onChange={handleChange}
                value={paymentType}
                fullWidth
                dense
                select
                helperText="Requerido">
                <MenuItem value="CASH">Efectivo</MenuItem>
                <MenuItem value="TRANSFERENCE">Transferencia</MenuItem>
              </InputField>
            </Grid>
            <Grid item xs={12}>
              <InputField
                variant="outlined"
                label="Notas adicionales"
                name="note"
                onChange={handleChange}
                defaultValue={note}
                multiline
                rows="4"
                rowsMax="4"
                fullWidth
                helperText="Opcional"
              />
            </Grid>
          </Grid>
        </CardContent>
      </FormMaterial>
    </MainContainer>
  );
};

// connect to router
export default InvoiceDetailsForm;
