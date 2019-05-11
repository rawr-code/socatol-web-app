import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import Formsy from 'formsy-react';

// Material UI
import { Icon, Typography, Grid, CardActions, Button } from '@material-ui/core';

// Atoms
import { InputField } from '../../components/Atoms';

// Molecules
import { FormMaterial } from '../../components/Molecules';

import { Info } from '@material-ui/icons';

class ExtractForm extends Component {
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
    const { mutation, handleClose } = this.props;

    return (
      <Mutation mutation={mutation}>
        {mutate => {
          return (
            <FormMaterial
              sm
              title={'Extracto Bancario'}
              subtitle="Información del archivo">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16
                }}>
                <Icon color="disabled" style={{ marginRight: 8 }}>
                  <Info />
                </Icon>
                <Typography variant="subtitle2" color="textSecondary">
                  Debe indicar el número de la columna correspondiente dentro
                  del archivo.
                </Typography>
              </div>
              <Formsy
                autoComplete="off"
                onValidSubmit={this.handleSubmit(mutate)}
                onValid={this.enableButton}
                onInvalid={this.disableButton}>
                <Grid container spacing={8}>
                  <Grid item xs={6} sm={3}>
                    <InputField
                      variant="outlined"
                      label="Fecha"
                      name="config.date"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <InputField
                      variant="outlined"
                      label="Referencia"
                      name="config.ref"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <InputField
                      variant="outlined"
                      label="Concepto"
                      name="config.concept"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <InputField
                      variant="outlined"
                      label="Importe"
                      name="config.amount"
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>

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

export default ExtractForm;
