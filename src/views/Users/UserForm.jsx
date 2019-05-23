import React, { Component } from 'react';

import { Mutation } from 'react-apollo';

import Formsy from 'formsy-react';

// Material UI
import { MenuItem, CardActions, Button } from '@material-ui/core';

// Atoms
import { InputField } from '../../components/Atoms';

// Molecules
import { FormMaterial } from '../../components/Molecules';

class ProductForm extends Component {
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
    console.log(model);

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
              title={data ? 'Editar Usuario' : 'Nuevo Usuario'}
              subtitle="Información del usuario">
              <Formsy
                autoComplete="off"
                onValidSubmit={this.handleSubmit(mutate)}
                onValid={this.enableButton}
                onInvalid={this.disableButton}>
                <InputField
                  label="Nombre"
                  name="username"
                  placeholder="Nombre de usuario"
                  autoFocus
                  fullWidth
                  required
                />
                <InputField
                  label="Contraseña"
                  name="password"
                  placeholder="Contraseña"
                  fullWidth
                  required
                  isPassword
                />
                <InputField
                  label="Permiso"
                  name="role"
                  fullWidth
                  required
                  select>
                  <MenuItem value="ADMINISTRADOR">Administrador</MenuItem>
                  <MenuItem value="CONSULTOR">Consultor</MenuItem>
                  <MenuItem value="CONTABLE">Contable</MenuItem>
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

export default ProductForm;
