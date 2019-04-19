import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';

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

// Mutations
import { NEW_PRODUCT_MUTATION } from '../../../mutations/Product';

import styles from './styles';

class NewProduct extends Component {
  state = {
    name: '',
    price: '',
    quantity: '',
    iva: '',
    description: '',
    warehouse: '',
    active: true
  };

  handleChange = e => {
    const { type, name, value, checked } = e.target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({ [name]: result });
  };

  handleValidate = () => {
    const { name, price, quantity, iva, warehouse } = this.state;
    const isValid = !name || !price || !quantity || !iva || !warehouse;

    return isValid;
  };

  handleSubmit = async (e, onSubmit) => {
    e.preventDefault();
    const result = await onSubmit();
    console.log(result);
  };

  generateInput = () => {
    const {
      name,
      price,
      quantity,
      iva,
      description,
      warehouse,
      active
    } = this.state;

    const input = {
      name,
      price: Number(price),
      quantity: Number(quantity),
      iva: Number(iva),
      description,
      warehouse,
      active
    };

    return input;
  };

  render() {
    const { classes, history } = this.props;
    return (
      <MainContainer>
        <Mutation
          mutation={NEW_PRODUCT_MUTATION}
          variables={{ input: this.generateInput() }}
          onCompleted={() => history.push('/inventario')}>
          {onSubmit => {
            return (
              <form
                className={classes.root}
                autoComplete="off"
                onSubmit={e => this.handleSubmit(e, onSubmit)}>
                <FormHeader
                  title="Nuevo Producto"
                  subtitle="Información del producto"
                />
                <Card className={classes.content}>
                  <CardContent>
                    <Grid container spacing={8}>
                      <Grid item xs={12}>
                        <InputField
                          variant="outlined"
                          label="Nombre*"
                          name="name"
                          onChange={this.handleChange}
                          fullWidth
                          dense
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <InputField
                          variant="outlined"
                          label="Precio*"
                          name="price"
                          onChange={this.handleChange}
                          fullWidth
                          dense
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <InputField
                          variant="outlined"
                          label="Cantidad*"
                          name="quantity"
                          onChange={this.handleChange}
                          fullWidth
                          dense
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputField
                          variant="outlined"
                          label="IVA*"
                          name="iva"
                          onChange={this.handleChange}
                          fullWidth
                          dense
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputField
                          variant="outlined"
                          label="Descripción*"
                          name="description"
                          onChange={this.handleChange}
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
                                label="Almacén*"
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
const _NewProduct = withStyles(styles)(NewProduct);

export default _NewProduct;
