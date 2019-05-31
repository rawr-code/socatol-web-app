import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import Formsy from 'formsy-react';

// Material UI
import { MenuItem, CardActions, Button } from '@material-ui/core';

// Atoms
import { InputField } from '../../components/Atoms';

// Molecules
import { FormMaterial } from '../../components/Molecules';

import bankList from './bankList';

class BankAccountForm extends Component {
  state = {
    isValid: false
  };

  disableButton = () => {
    this.setState({ isValid: false });
  };

  enableButton = () => {
    this.setState({ isValid: true });
  };

  handleSubmit = mutate => async model => {
    const { data } = this.props;
    let input = {};
    if (data) {
      input = { id: data.id, ...model };
    } else {
      input = model;
    }
    console.log(input);
    const result = await mutate({ variables: { input } });
    console.log(result);
  };

  render() {
    const { isValid } = this.state;
    const { mutation, data, handleClose } = this.props;

    return (
      <Mutation mutation={mutation} onCompleted={handleClose}>
        {mutate => {
          return (
            <FormMaterial
              title={data ? 'Editar Cuenta' : 'Nueva Cuenta Bancaria'}
              subtitle="Información de la cuenta">
              <Formsy
                autoComplete="off"
                onValidSubmit={this.handleSubmit(mutate)}
                onValid={this.enableButton}
                onInvalid={this.disableButton}>
                <InputField
                  variant="outlined"
                  label="Nombre"
                  name="name"
                  fullWidth
                  required
                  value={data && data.name ? data.name : null}
                />
                <InputField
                  variant="outlined"
                  label="Banco"
                  name="bank"
                  fullWidth
                  required
                  value={data && data.bank ? data.bank : null}
                  select>
                  {bankList.map(bank => (
                    <MenuItem value={bank.name} key={bank.name}>
                      {bank.name}
                    </MenuItem>
                  ))}
                </InputField>
                <InputField
                  variant="outlined"
                  label="Número de cuenta"
                  name="number"
                  minlength={20}
                  cuenta
                  fullWidth
                  required
                  value={data && data.number ? data.number : null}
                />
                <InputField
                  variant="outlined"
                  label="Tipo de cuenta"
                  name="type"
                  fullWidth
                  required
                  value={data && data.type ? data.type : null}
                  select>
                  <MenuItem value="CORRIENTE">Corriente</MenuItem>
                  <MenuItem value="AHORRO">Ahorro</MenuItem>
                </InputField>
                <CardActions>
                  <Button color="primary" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={!isValid}>
                    Guardar
                  </Button>
                </CardActions>
              </Formsy>
            </FormMaterial>
          );
        }}
      </Mutation>
    );
  }
}

export default BankAccountForm;
