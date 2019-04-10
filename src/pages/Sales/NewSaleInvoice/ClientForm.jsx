import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Grid, Button, MenuItem } from '@material-ui/core';

// Atoms
import ReduxInputField from '../../../components/Atoms/ReduxInputField';

import validate from './formValidations';

class ClientForm extends Component {
  render() {
    const { handleSubmit, invalid, pristine, submitting } = this.props;
    const { entity } = this.props.state;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <Grid container spacing={24}>
          <Grid item md={6}>
            <Field
              component={ReduxInputField}
              label="Tipo de cliente"
              name="entity.type"
              variant="outlined"
              select
              fullWidth
              dense>
              <MenuItem value="newNatural">Nuevo cliente natural</MenuItem>
              <MenuItem value="newJuridico">Nuevo cliente juridico</MenuItem>
              <MenuItem value="natural">Cliente natural</MenuItem>
              <MenuItem value="juridico">Cliente juridico</MenuItem>
            </Field>
          </Grid>
          {entity &&
            (entity.type === 'natural' || entity.type === 'newNatural') && (
              <Grid item md={6}>
                <Field
                  component={ReduxInputField}
                  label="Cedula*"
                  name="entity.dni"
                  variant="outlined"
                  placeholder="0"
                  fullWidth
                  dense
                />
              </Grid>
            )}
          {entity &&
            (entity.type === 'juridico' || entity.type === 'newJuridico') && (
              <Grid item md={6}>
                <Field
                  component={ReduxInputField}
                  label="Rif*"
                  name="entity.rif"
                  variant="outlined"
                  placeholder="0"
                  fullWidth
                  dense
                />
              </Grid>
            )}

          {entity && entity.type === 'newNatural' && (
            <>
              <Grid item md={6}>
                <Field
                  component={ReduxInputField}
                  label="Primer Nombre*"
                  name="entity.firstname"
                  variant="outlined"
                  fullWidth
                  dense
                />
              </Grid>
              <Grid item md={6}>
                <Field
                  component={ReduxInputField}
                  label="Segundo Nombre"
                  name="entity.secondname"
                  variant="outlined"
                  fullWidth
                  dense
                />
              </Grid>
              <Grid item md={6}>
                <Field
                  component={ReduxInputField}
                  label="Primer Apellido*"
                  name="entity.lastname"
                  variant="outlined"
                  fullWidth
                  dense
                />
              </Grid>
              <Grid item md={6}>
                <Field
                  component={ReduxInputField}
                  label="Segundo Apellido"
                  name="entity.secondlastname"
                  variant="outlined"
                  fullWidth
                  dense
                />
              </Grid>
            </>
          )}
          {entity && entity.type === 'newJuridico' && (
            <Grid item md={12}>
              <Field
                component={ReduxInputField}
                label="Nombre*"
                name="entity.name"
                variant="outlined"
                fullWidth
                dense
              />
            </Grid>
          )}
          {entity &&
            (entity.type === 'newNatural' || entity.type === 'newJuridico') && (
              <>
                <Grid item md={6}>
                  <Field
                    component={ReduxInputField}
                    label="Telefono"
                    name="entity.phone"
                    variant="outlined"
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item md={6}>
                  <Field
                    component={ReduxInputField}
                    label="Correo"
                    name="entity.email"
                    variant="outlined"
                    fullWidth
                    dense
                  />
                </Grid>
                <Grid item md={12}>
                  <Field
                    component={ReduxInputField}
                    label="Dirección"
                    name="entity.address"
                    variant="outlined"
                    fullWidth
                    dense
                  />
                </Grid>
              </>
            )}
        </Grid>
        <div style={{ marginTop: 12 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={invalid || pristine || submitting}>
            Siguiente
          </Button>
        </div>
      </form>
    );
  }
}

ClientForm = reduxForm({
  form: 'NewSalesInvoice', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  initialValues: { products: [{}], entity: {} },
  validate
})(ClientForm);

// Decorate with connect to read form values
const selector = formValueSelector('NewSalesInvoice'); // <- same as form name

ClientForm = connect(state => {
  const entity = selector(state, 'entity');
  return {
    state: {
      entity
    }
  };
})(ClientForm);

export default ClientForm;
