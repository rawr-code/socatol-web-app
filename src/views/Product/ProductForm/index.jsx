import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

// Material UI
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  MenuItem,
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

// Queries
import { GET_WAREHOUSES_QUERY } from '../../../queries/Warehouse';

import styles from './styles';

class ProductForm extends Component {
  state = {
    id: '',
    name: '',
    price: '',
    quantity: '',
    description: '',
    warehouse: '',
    active: true
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    mutation: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { product } = this.props;
    if (product) {
      this.setState({ ...product, warehouse: product.warehouse.id });
    }
  }

  handleChange = e => {
    const { type, name, value, checked } = e.target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({ [name]: result });
  };

  handleValidate = () => {
    const { name, price, quantity, warehouse } = this.state;
    const isValid = !name || !price || !quantity || !warehouse;

    return isValid;
  };

  generateInput = () => {
    const input = {
      id: this.state.id,
      name: this.state.name,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
      description: this.state.description,
      warehouse: this.state.warehouse,
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
    const { classes, mutation, history, product } = this.props;
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
                  title={product ? 'Editar Producto' : 'Nuevo Producto'}
                  subtitle="Información del producto"
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
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <InputField
                          variant="outlined"
                          label="Precio"
                          name="price"
                          onChange={this.handleChange}
                          defaultValue={this.state.price}
                          fullWidth
                          dense
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <InputField
                          variant="outlined"
                          label="Cantidad"
                          name="quantity"
                          onChange={this.handleChange}
                          defaultValue={this.state.quantity}
                          fullWidth
                          dense
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
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Query query={GET_WAREHOUSES_QUERY}>
                          {({ loading, error, data }) => {
                            let isLoading = false;
                            let options = [];

                            if (loading) isLoading = true;

                            if (error) {
                              isLoading = false;
                              return `Error: ${error.message}`;
                            }

                            if (Object.keys(data).length > 0) {
                              isLoading = false;
                              options = data.getWarehouses;
                            }
                            return (
                              <InputField
                                disabled={isLoading}
                                variant="outlined"
                                label="Almacén"
                                name="warehouse"
                                select
                                value={this.state.warehouse}
                                onChange={this.handleChange}
                                fullWidth
                                dense>
                                {options.map(item => (
                                  <MenuItem value={item.id} key={item.id}>
                                    {item.name}
                                  </MenuItem>
                                ))}
                              </InputField>
                            );
                          }}
                        </Query>
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
                            <FormHelperText>Activar producto</FormHelperText>
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
const _ProductForm = withStyles(styles)(ProductForm);

// connect to router
export default withRouter(_ProductForm);
