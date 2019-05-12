import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import Formsy from 'formsy-react';

// Material UI
import { CardActions, Button } from '@material-ui/core';

// Atoms
import { InputField } from '../../components/Atoms';

// Molecules
import { FormMaterial } from '../../components/Molecules';

class WarehouseForm extends Component {
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
    const result = await mutate({ variables: { input: model } });
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
              title={data ? 'Editar Almacén' : 'Nuevo Almacén'}
              subtitle="Información del almacén">
              <Formsy
                autoComplete="off"
                onValidSubmit={this.handleSubmit(mutate)}
                onValid={this.enableButton}
                onInvalid={this.disableButton}>
                <InputField
                  label="Nombre"
                  name="name"
                  placeholder="Nombre del almacén"
                  autoFocus
                  fullWidth
                  required
                  value={data && data.name ? data.name : null}
                />
                <InputField
                  label="Descripción"
                  name="description"
                  placeholder="Descripción del almacén"
                  multiline
                  rows="4"
                  rowsMax="4"
                  fullWidth
                  required
                  value={data && data.description ? data.description : null}
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

export default WarehouseForm;
