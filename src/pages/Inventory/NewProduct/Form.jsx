import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { CardContent, Button } from '@material-ui/core';

// Atoms
import CardContainer from '../../../components/Atoms/CardContainer';
import ReduxInputField from '../../../components/Atoms/ReduxInputField';
import FormActions from '../../../components/Atoms/FormActions';

// Molecules
import DataTableHeader from '../../../components/Molecules/DataTableHeader';

import validate from './FormValidations';

const Form = props => {
  const { handleSubmit, valid, pristine, submitting } = props;
  const headerProps = {
    img: 'https://img.icons8.com/dusk/64/000000/product.png',
    title: 'Producto',
    subtitle: 'Detalles del producto'
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <CardContainer style={{ width: 350 }}>
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
          <div style={{ display: 'flex' }}>
            <Field
              component={ReduxInputField}
              label="Cantidad"
              name="quantity"
              variant="outlined"
              placeholder="0"
              fullWidth
              dense
            />
            <Field
              component={ReduxInputField}
              label="IVA%"
              name="iva"
              variant="outlined"
              placeholder="0"
              fullWidth
              dense
              select
              options={['Excento', '5%', '12%']}
            />
          </div>

          <Field
            component={ReduxInputField}
            label="Precio"
            name="price"
            variant="outlined"
            placeholder="0"
            fullWidth
            dense
          />
          <Field
            component={ReduxInputField}
            label="Almacén"
            name="warehouse"
            variant="outlined"
            placeholder="Almacén"
            fullWidth
            dense
            select
            options={['almacen uno']}
          />
        </CardContent>
        <FormActions>
          <Button color="primary">Limpiar campos</Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!valid ? true : pristine || submitting}>
            Guardar
          </Button>
        </FormActions>
      </CardContainer>
    </form>
  );
};

export default reduxForm({ form: 'NewProduct', validate })(Form);
