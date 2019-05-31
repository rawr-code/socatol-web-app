import React from 'react';

import Formsy from 'formsy-react';

// Material UI
import {
  Grid,
  CardContent,
  Button,
  MenuItem,
  CardActions
} from '@material-ui/core';

// Atoms
import InputField from '../../components/Atoms/InputField';

// Molecules
import { FormMaterial } from '../../components/Molecules';

import estados from './est';
import munici from './mun';

const ClientForm = props => {
  const [est, setEst] = React.useState([]);
  const { handleClose, handleChange, data, handleNext } = props;

  const handleSubmit = values => {
    handleChange(values);
    handleNext();
  };

  const handleChangeData = model => {
    if (model.state) {
      // console.log(model.state);
      setEst(model.state);
      // console.log(munici);
      let key = '';
      Object.keys(estados).forEach(item => {
        if (estados[item] === model.state) {
          key = item;
        }
      });

      const muni = Object.values(munici[key]);

      setEst(muni);
    }
    return model;
  };

  return (
    <FormMaterial md title="Editar Cliente" subtitle="Información del cliente">
      <Formsy
        autoComplete="off"
        onValidSubmit={handleSubmit}
        onChange={handleChangeData}>
        <CardContent style={{ minWidth: 400, maxWidth: 600 }}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Cedula"
                name="dni"
                placeholder="Cedula"
                fullWidth
                required
                value={data && data.dni ? data.dni : null}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Nombre"
                name="name"
                placeholder="Nombre"
                fullWidth
                required
                value={data && data.name ? data.name : null}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Estado"
                name="state"
                placeholder="Estado"
                fullWidth
                required
                value={data && data.state ? data.state : null}
                select>
                {Object.keys(estados).map((est, index) => (
                  <MenuItem value={estados[est]} key={index}>
                    {estados[est]}
                  </MenuItem>
                ))}
              </InputField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Municipio"
                name="municipality"
                placeholder="Municipio"
                fullWidth
                required
                value={data && data.municipality ? data.municipality : null}
                select>
                {est.map(municipio => (
                  <MenuItem value={municipio} key={municipio}>
                    {municipio}
                  </MenuItem>
                ))}
              </InputField>
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Dirección"
                name="address"
                placeholder="Dirección"
                fullWidth
                required
                value={data && data.address ? data.address : null}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Telefono"
                name="phone"
                placeholder="Telefono"
                fullWidth
                required
                value={data && data.phone ? data.phone : null}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Correo"
                name="email"
                placeholder="Correo"
                fullWidth
                required
                value={data && data.email ? data.email : null}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Notas"
                name="notes"
                placeholder="Información adicional sobre el cliente"
                multiline
                rows="4"
                rowsMax="4"
                fullWidth
                required
                value={data && data.notes ? data.notes : null}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            // disabled={!isValid}
          >
            Guardar
          </Button>
        </CardActions>
      </Formsy>
    </FormMaterial>
  );
};

// connect to router
export default ClientForm;
