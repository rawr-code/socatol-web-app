import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

// Material UI
import {
  Grid,
  FormControlLabel,
  FormHelperText,
  Checkbox
} from '@material-ui/core';

// Layout
import MainContainer from '../../components/Layout/MainContainer';

// Atoms
import InputField from '../../components/Atoms/InputField';

// Organisms
import { FormMaterial } from '../../components/Organisms';

class WarehouseForm extends Component {
  state = {
    id: '',
    name: '',
    description: '',
    active: true
  };

  static propTypes = {
    mutation: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { warehouse } = this.props;
    if (warehouse) {
      this.setState({ ...warehouse });
    }
  }

  handleChange = e => {
    const { type, name, value, checked } = e.target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({ [name]: result });
  };

  handleValidate = () => {
    const { name, description } = this.state;
    const isValid = !name || !description;

    return isValid;
  };

  generateInput = () => {
    const input = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      active: this.state.active
    };

    return input;
  };

  handleSubmit = onSubmit => async e => {
    e.preventDefault();
    const result = await onSubmit();
    console.log(result);
  };

  updateState = data => {
    this.setState({ ...data });
  };

  render() {
    const { mutation, history, warehouse } = this.props;
    return (
      <MainContainer>
        <Mutation
          mutation={mutation}
          variables={{ input: this.generateInput() }}
          onCompleted={() => history.push('/inventario')}>
          {onSubmit => {
            return (
              <FormMaterial
                validate={this.handleValidate}
                onSubmit={this.handleSubmit(onSubmit)}
                title={warehouse ? 'Editar Almacén' : 'Nuevo Almacén'}
                subtitle="Información del almacén">
                <Grid container spacing={8}>
                  <Grid item xs={12}>
                    <InputField
                      variant="outlined"
                      label="Nombre"
                      name="name"
                      onChange={this.handleChange}
                      defaultValue={this.state.name}
                      fullWidth
                      dense
                      helperText="Requerido"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      variant="outlined"
                      label="Descripción"
                      name="description"
                      onChange={this.handleChange}
                      defaultValue={this.state.description}
                      multiline
                      rows="4"
                      rowsMax="4"
                      fullWidth
                      helperText="Requerido"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.active}
                          onChange={this.handleChange}
                          value={'active'}
                          name="active"
                          color="primary"
                        />
                      }
                      label={<FormHelperText>Activar almacén</FormHelperText>}
                    />
                  </Grid>
                </Grid>
              </FormMaterial>
            );
          }}
        </Mutation>
      </MainContainer>
    );
  }
}

// connect to router
export default withRouter(WarehouseForm);
