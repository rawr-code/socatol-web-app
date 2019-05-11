import React from 'react';

// Material UI
import {
  Grid,
  CardContent,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  FormControl,
  // FormLabel,
  Typography
} from '@material-ui/core';

// Layout
import MainContainer from '../../../Layout/MainContainer';

// Atoms
import InputFieldOld from '../../../components/Atoms/InputFieldOld';

// Molecules
import { FormMaterial } from '../../../components/Molecules';

const InvoiceDetailsForm = props => {
  const { handleChange, back, data, onSubmit } = props;
  const { paymentType, note, dispatch } = data;
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
              <InputFieldOld
                variant="outlined"
                label="Metodo de pago"
                name="paymentType"
                onChange={handleChange}
                value={paymentType}
                fullWidth
                dense
                select>
                <MenuItem value="EFECTIVO">Efectivo</MenuItem>
                <MenuItem value="TRANSFERENCIA">Transferencia</MenuItem>
              </InputFieldOld>
            </Grid>
            <Grid item xs={12}>
              <InputFieldOld
                variant="outlined"
                label="Notas adicionales"
                name="note"
                onChange={handleChange}
                defaultValue={note}
                multiline
                rows="4"
                rowsMax="4"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </CardContent>
      </FormMaterial>
    </MainContainer>
  );
};

// connect to router
export default InvoiceDetailsForm;
