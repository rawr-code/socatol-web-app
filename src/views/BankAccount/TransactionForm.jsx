import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import Formsy from 'formsy-react';

// Material UI
import { CardActions, Button } from '@material-ui/core';

// Atoms
import { InputField } from '../../components/Atoms';

// Molecules
import { FormMaterial } from '../../components/Molecules';

class TransactionForm extends Component {
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
    const { id } = this.props;
    let input = {};
    if (id) {
      input = { bankAccount: id, ...model };
    } else {
      input = model;
    }
    console.log(input);
    const result = await mutate({ variables: { input } });
    console.log(result);
  };

  render() {
    const { isValid } = this.state;
    const { mutation, handleClose } = this.props;

    return (
      <Mutation mutation={mutation} onCompleted={handleClose}>
        {mutate => {
          return (
            <FormMaterial
              title="Nueva Transacción"
              subtitle="Información de la trasacción">
              <Formsy
                autoComplete="off"
                onValidSubmit={this.handleSubmit(mutate)}
                onValid={this.enableButton}
                onInvalid={this.disableButton}>
                <InputField
                  variant="outlined"
                  label="Fecha"
                  name="date"
                  fullWidth
                  required
                />
                <InputField
                  variant="outlined"
                  label="Referencia"
                  name="ref"
                  fullWidth
                  required
                />
                <InputField
                  variant="outlined"
                  label="Concepto"
                  name="concept"
                  fullWidth
                  required
                />
                <InputField
                  variant="outlined"
                  label="Importe"
                  name="amount"
                  fullWidth
                  required
                />
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

export default TransactionForm;
