import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { CardContent, CardActions, Button, Grid } from '@material-ui/core';

// Atoms
import CardContainer from '../../../components/Atoms/CardContainer';
import ReduxInputField from '../../../components/Atoms/ReduxInputField';
import ReduxSelectField from '../../../components/Atoms/ReduxSelectField';

// Molecules
import DataTableHeader from '../../../components/Molecules/DataTableHeader';

const Form = props => {
  const { handleSubmit, pristine, submitting } = props;
  const headerProps = {
    img: 'https://img.icons8.com/dusk/64/000000/conference.png',
    title: 'Cuenta Bancaria',
    subtitle: 'Detalles de la cuenta'
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <CardContainer style={{ width: 650 }}>
        <DataTableHeader {...headerProps} />
        <CardContent>
          <Grid container spacing={24}>
            <Grid item md={6}>
              <Field
                component={ReduxInputField}
                label="Nombre"
                name="name"
                variant="outlined"
                placeholder="Nombre"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxSelectField}
                label="Banco"
                name="bank"
                fullWidth
                options={[
                  'Banco de Venezuela',
                  'Banco Provincial',
                  'Banco Mercantil'
                ]}
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxInputField}
                label="Número de cuenta"
                name="number"
                variant="outlined"
                placeholder="0"
                fullWidth
                dense
              />
            </Grid>
            <Grid item md={6}>
              <Field
                component={ReduxSelectField}
                label="Tipo de cuenta"
                name="type"
                fullWidth
                options={['Ahorro', 'Corriente']}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 12
            // paddingTop: 8
          }}>
          <Button color="primary">Limpiar campos</Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={pristine || submitting}>
            Guardar
          </Button>
        </CardActions>
      </CardContainer>
    </form>
  );
};

export default reduxForm({
  form: 'NewAccountBank'
})(Form);
