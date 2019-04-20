import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

// Material UI
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  withStyles
} from '@material-ui/core';

// Layout
import MainContainer from '../../../components/Layout/MainContainer';

// Atoms
import InputField from '../../../components/Atoms/InputField';

// Molecules
import FormHeader from '../../../components/Molecules/FormHeader';

import styles from './styles';

class WarehouseForm extends Component {
  state = {
    id: '',
    name: '',
    description: '',
    active: true
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
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
    const { classes, mutation, history, warehouse } = this.props;
    return (
      <MainContainer>
        <Mutation
          mutation={mutation}
          variables={{ input: this.generateInput() }}
          onCompleted={() => history.push('/inventario')}>
          {onSubmit => {
            return (
              <form
                className={classes.root}
                autoComplete="off"
                onSubmit={this.handleSubmit(onSubmit)}>
                <FormHeader
                  title={warehouse ? 'Editar Almacén' : 'Nuevo Almacén'}
                  subtitle="Información del almacén"
                />
                <Card className={classes.content}>
                  <CardContent>
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
                          label={
                            <FormHelperText>Activar almacén</FormHelperText>
                          }
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button color="primary">Cancelar</Button>
                    <Button
                      color="primary"
                      variant="contained"
                      disabled={this.handleValidate()}
                      type="submit">
                      Guardar
                    </Button>
                  </CardActions>
                </Card>
              </form>
            );
          }}
        </Mutation>
      </MainContainer>
    );
  }
}

// Apply styles
const _WarehouseForm = withStyles(styles)(WarehouseForm);

// connect to router
export default withRouter(_WarehouseForm);
