import React from 'react';
import { Query } from 'react-apollo';

// Material UI
import {
  Grid,
  CardContent,
  Button,
  Checkbox,
  MenuItem,
  FormHelperText,
  FormControlLabel
} from '@material-ui/core';

// Layout
import MainContainer from '../../components/Layout/MainContainer';

// Atoms
import InputField from '../../components/Atoms/InputField';

// Organisms
import { FormMaterial } from '../../components/Organisms';

// Queries
import { GET_PERSONS_QUERY } from '../../queries/Person';

const ClientForm = props => {
  const { handleChange, next, data } = props;
  const { isNew, id, dni, firstname, lastname, address, phone, email } = data;
  return (
    <MainContainer>
      <FormMaterial
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isNew}
                    onChange={handleChange}
                    value={'Nuevo'}
                    name="isNew"
                    color="primary"
                  />
                }
                label={<FormHelperText>¿Nuevo cliente?</FormHelperText>}
              />
            </Grid>
            {isNew === true ? (
              <>
                <Grid item xs={12}>
                  <InputField
                    variant="outlined"
                    label="Cedula"
                    name="dni"
                    onChange={handleChange}
                    defaultValue={dni}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    variant="outlined"
                    label="Nombre"
                    name="firstname"
                    onChange={handleChange}
                    defaultValue={firstname}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    variant="outlined"
                    label="Apellido"
                    name="lastname"
                    onChange={handleChange}
                    defaultValue={lastname}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    variant="outlined"
                    label="Dirección"
                    name="address"
                    onChange={handleChange}
                    defaultValue={address}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    variant="outlined"
                    label="Telefono"
                    name="phone"
                    onChange={handleChange}
                    defaultValue={phone}
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
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
            ) : (
              <Grid item xs={12}>
                <Query query={GET_PERSONS_QUERY}>
                  {({ loading, error, data }) => {
                    let persons = [];
                    console.log(data);
                    if (loading) console.log('loading...');

                    if (error) console.log(error);

                    if (data.getPersonalInformations)
                      persons = data.getPersonalInformations;

                    if (persons.length > 0) {
                      return (
                        <InputField
                          variant="outlined"
                          label="Cliente"
                          name="id"
                          onChange={handleChange}
                          value={id}
                          fullWidth
                          dense
                          select>
                          {persons.map(person => (
                            <MenuItem value={person.id} key={person.id}>
                              {person.firstname} {person.lastname}
                            </MenuItem>
                          ))}
                        </InputField>
                      );
                    }
                    return (
                      <InputField
                        variant="outlined"
                        label="Cliente"
                        name="id"
                        onChange={handleChange}
                        value={id}
                        fullWidth
                        dense
                        select
                      />
                    );
                  }}
                </Query>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </FormMaterial>
    </MainContainer>
  );
};

// connect to router
export default ClientForm;
