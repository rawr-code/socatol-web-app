import React from 'react';
import { Query } from 'react-apollo';

import Formsy from 'formsy-react';

// Material UI
import { Grid, CardContent, Button, MenuItem } from '@material-ui/core';

// Atoms
import InputField from '../../../components/Atoms/InputField';
import SelectField from '../../../components/Atoms/SelectField';

// Queries
import { GET_PERSONS_QUERY } from '../../../queries/Person';

import estados from '../est';
import munici from '../mun';

const ClientForm = props => {
  const [est, setEst] = React.useState([]);
  const {
    handleChange,
    data,
    handleChangeSelect,
    dataSelect,
    handleNext
  } = props;

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
    <Formsy
      autoComplete="off"
      onValidSubmit={handleSubmit}
      onChange={handleChangeData}>
      <CardContent style={{ minWidth: 400, maxWidth: 600 }}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Query query={GET_PERSONS_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) console.log(error);

                let { persons } = data;
                persons = [{ id: 'new', name: 'Nuevo Cliente' }, ...persons];

                return (
                  <SelectField
                    options={persons}
                    isClearable={false}
                    label="Cliente"
                    noOptionsMessage={() => 'No se contraron datos'}
                    loadingMessage={() => 'Cargando...'}
                    placeholder="Seleccione un cliente"
                    getOptionValue={option => option.id}
                    getOptionLabel={option => option.name}
                    onChange={handleChangeSelect}
                    value={dataSelect && dataSelect ? dataSelect : null}
                  />
                );
              }}
            </Query>
          </Grid>
          {dataSelect && dataSelect.id === 'new' && (
            <>
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
            </>
          )}
        </Grid>
      </CardContent>
      {dataSelect && dataSelect.id === 'new' ? (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          // disabled={!dataSelect}
        >
          Siguiente
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleSubmit}
          // disabled={!dataSelect}
        >
          Siguiente
        </Button>
      )}
    </Formsy>
  );
};

// connect to router
export default ClientForm;
