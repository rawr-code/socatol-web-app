import React from 'react';
import { Query } from 'react-apollo';

// Material UI
import { Grid, CardContent, Button } from '@material-ui/core';

// Layout
import MainContainer from '../../../Layout/MainContainer';

// Atoms
import InputFieldOld from '../../../components/Atoms/InputFieldOld';
import SelectField from '../../../components/Atoms/SelectField';

// Molecules
import { FormMaterial } from '../../../components/Molecules';

// Queries
import { GET_PERSONS_QUERY } from '../../../queries/Person';

const ClientForm = props => {
  const { handleSelect, handleChange, next, data } = props;
  const {
    personId,
    dni,
    name,
    state,
    municipality,
    address,
    phone,
    email
  } = data;
  return (
    <MainContainer>
      <FormMaterial
        sm={personId.id === 'new'}
        title={'Cliente'}
        subtitle="Información del cliente"
        actions={
          <Button variant="contained" color="primary" onClick={next}>
            Siguiente
          </Button>
        }>
        <CardContent>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Query query={GET_PERSONS_QUERY}>
                {({ loading, error, data }) => {
                  let persons = [];
                  if (loading) console.log('loading...');
                  if (error) console.log(error);
                  if (data.getPersonalInformations)
                    persons = [
                      { id: 'new', name: 'Nuevo Cliente' },
                      ...data.getPersonalInformations
                    ];

                  return (
                    <SelectField
                      options={persons}
                      isLoading={loading}
                      isClearable={false}
                      label="Cliente"
                      noOptionsMessage={() => 'No se contraron datos'}
                      loadingMessage={() => 'Cargando...'}
                      placeholder="Seleccione un cliente"
                      getOptionValue={option => option.id}
                      getOptionLabel={option => option.name}
                      onChange={handleSelect}
                      value={personId}
                    />
                  );
                }}
              </Query>
            </Grid>
            {personId.id === 'new' && (
              <>
                <Grid item xs={12} sm={6}>
                  <InputFieldOld
                    variant="outlined"
                    label="Cedula"
                    name="dni"
                    onChange={handleChange}
                    defaultValue={dni}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputFieldOld
                    variant="outlined"
                    label="Nombre"
                    name="name"
                    onChange={handleChange}
                    defaultValue={name}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputFieldOld
                    variant="outlined"
                    label="Estado"
                    name="state"
                    onChange={handleChange}
                    defaultValue={state}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputFieldOld
                    variant="outlined"
                    label="Municipio"
                    name="municipality"
                    onChange={handleChange}
                    defaultValue={municipality}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputFieldOld
                    variant="outlined"
                    label="Dirección"
                    name="address"
                    onChange={handleChange}
                    defaultValue={address}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputFieldOld
                    variant="outlined"
                    label="Telefono"
                    name="phone"
                    onChange={handleChange}
                    defaultValue={phone}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputFieldOld
                    variant="outlined"
                    label="Correo"
                    name="email"
                    onChange={handleChange}
                    defaultValue={email}
                    fullWidth
                    dense
                  />
                </Grid>
              </>
            )}
          </Grid>
        </CardContent>
      </FormMaterial>
    </MainContainer>
  );
};

// connect to router
export default ClientForm;
