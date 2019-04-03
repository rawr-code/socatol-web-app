import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Paper, CardContent, Button, withStyles } from '@material-ui/core';

// Atoms
import ReduxInputField from '../../../components/Atoms/ReduxInputField';
import FormActions from '../../../components/Atoms/FormActions';

// Molecules
import DataTableHeader from '../../../components/Molecules/DataTableHeader';

import styles from './styles';
import validate from './FormValidations';

const Form = props => {
  const { classes, handleSubmit, valid, pristine, submitting } = props;
  const headerProps = {
    img: 'https://img.icons8.com/dusk/64/000000/warehouse.png',
    title: 'Almacén',
    subtitle: 'Detalles del almacén'
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Paper className={classes.root}>
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
            multiline
            rows="4"
            rowsMax="4"
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
      </Paper>
    </form>
  );
};

const FormStyles = withStyles(styles)(Form);

export default reduxForm({ form: 'NewWarehouse', validate })(FormStyles);
