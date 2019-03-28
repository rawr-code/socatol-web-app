import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { CardContent, CardActions, Button } from '@material-ui/core';

// Atoms
import CardContainer from '../../../components/Atoms/CardContainer';
import ReduxInputField from '../../../components/Atoms/ReduxInputField';

// Molecules
import DataTableHeader from '../../../components/Molecules/DataTableHeader';

const Form = props => {
  const { handleSubmit, pristine, submitting } = props;
  const headerProps = {
    img: 'https://img.icons8.com/dusk/64/000000/warehouse.png',
    title: 'Almacén',
    subtitle: 'Detalles del almacén'
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <CardContainer style={{ width: 320 }}>
        <DataTableHeader {...headerProps} />
        <CardContent>
          <Field
            component={ReduxInputField}
            label="Nombre"
            name="name"
            variant="outlined"
            fullWidth
            dense
          />
          <Field
            component={ReduxInputField}
            label="Descripción"
            name="description"
            variant="outlined"
            fullWidth
            dense
          />
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
  form: 'NewSaleInvoice',
  initialValues: { products: [{}] }
})(Form);
