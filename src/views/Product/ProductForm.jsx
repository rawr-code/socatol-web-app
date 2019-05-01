import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

// Material UI
import { CardContent, Grid, MenuItem, InputAdornment } from '@material-ui/core';

// Layout
import MainContainer from '../../components/Layout/MainContainer';

// Atoms
import InputField from '../../components/Atoms/InputField';

// Molecules
import { FormMaterial } from '../../components/Organisms';

// Queries
import { GET_WAREHOUSES_QUERY } from '../../queries/Warehouse';

class ProductForm extends Component {
  state = {
    id: '',
    name: '',
    price: '',
    iva: '',
    stock: '',
    description: '',
    warehouse: ''
  };

  static propTypes = {
    mutation: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { data } = this.props;
    if (data) {
      this.setState({ ...data, warehouse: data.warehouse.id });
    }
  }

  handleChange = e => {
    const { type, name, value, checked } = e.target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({ [name]: result });
  };

  handleValidate = () => {
    const { name, price, iva, stock, warehouse } = this.state;
    const isValid = !name || !price || !iva || !stock || !warehouse;

    return isValid;
  };

  handleSubmit = onSubmit => async e => {
    e.preventDefault();
    const result = await onSubmit();
    console.log(result);
  };

  generateInput = () => {
    const input = {
      id: this.state.id,
      name: this.state.name,
      price: Number(this.state.price),
      iva: Number(this.state.iva),
      stock: Number(this.state.stock),
      description: this.state.description,
      warehouse: this.state.warehouse
    };

    return input;
  };

  render() {
    const { mutation, history, data } = this.props;
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
                title={data ? 'Editar Producto' : 'Nuevo Producto'}
                subtitle="Información del producto">
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
                    <Grid item xs={12}>
                      <InputField
                        variant="outlined"
                        label="Precio"
                        name="price"
                        onChange={this.handleChange}
                        defaultValue={this.state.price}
                        fullWidth
                        dense
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              style={{ width: 40 }}>
                              Bs. S
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputField
                        variant="outlined"
                        label="IVA"
                        name="iva"
                        onChange={this.handleChange}
                        value={this.state.iva}
                        fullWidth
                        dense
                        select>
                        <MenuItem value={0}>Excento</MenuItem>
                        <MenuItem value={12}>12 %</MenuItem>
                      </InputField>
                    </Grid>
                    <Grid item xs={6}>
                      <InputField
                        variant="outlined"
                        label="Cantidad"
                        name="stock"
                        onChange={this.handleChange}
                        defaultValue={this.state.stock}
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
                              dense
                              required>
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
                  </Grid>
                </CardContent>
              </FormMaterial>
            );
          }}
        </Mutation>
      </MainContainer>
    );
  }
}

// connect to router
export default withRouter(ProductForm);
