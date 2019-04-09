import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { CardContent, Button, MenuItem } from '@material-ui/core';

// Atoms
import CardContainer from '../../../components/Atoms/CardContainer';
import ReduxInputField from '../../../components/Atoms/ReduxInputField';
import FormActions from '../../../components/Atoms/FormActions';

// Molecules
import DataTableHeader from '../../../components/Molecules/DataTableHeader';

import validate from './FormValidations';

const Form = props => {
  const { handleSubmit, valid, pristine, submitting, bankList } = props;
  const headerProps = {
    img: 'https://img.icons8.com/dusk/64/000000/conference.png',
    title: 'Cuenta Bancaria',
    subtitle: 'Detalles de la cuenta'
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <CardContainer style={{ width: 450 }}>
        <DataTableHeader {...headerProps} />
        <CardContent>
          <Field
            component={ReduxInputField}
            label="Nombre"
            name="name"
            variant="outlined"
            placeholder="Nombre"
            fullWidth
            dense
          />
          <Field
            component={ReduxInputField}
            label="Banco"
            name="bank"
            fullWidth
            variant="outlined"
            select
            dense>
            {bankList.map(bank => (
              <MenuItem value={bank.code} key={bank.code}>
                {bank.name}
              </MenuItem>
            ))}
            <MenuItem value="Banco de Venezuela">Banco de Venezuela,</MenuItem>
          </Field>
          <Field
            component={ReduxInputField}
            label="Tipo de cuenta"
            name="type"
            options={['Ahorro', 'Corriente']}
            variant="outlined"
            select
            fullWidth
            dense>
            <MenuItem value="ahorro">Ahorro</MenuItem>
            <MenuItem value="corriente">Corriente</MenuItem>
          </Field>
          <Field
            component={ReduxInputField}
            label="Número de cuenta"
            name="number"
            variant="outlined"
            placeholder="0"
            fullWidth
            dense
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

export default reduxForm({ form: 'NewBankAccount', validate })(Form);
