import React, { Component } from 'react';

import { Query, Mutation } from 'react-apollo';

import Formsy from 'formsy-react';

// Material UI
import {
  MenuItem,
  InputAdornment,
  Grid,
  CardActions,
  Button
} from '@material-ui/core';

// Atoms
import { InputField } from '../../components/Atoms';

// Molecules
import { FormMaterial } from '../../components/Molecules';

// Subscriptions
import { WAREHOUSE_ADDED_SUBSCRIPTION } from '../../subscriptions/Warehouse';

// Queries
import { GET_WAREHOUSES_QUERY } from '../../queries/Warehouse';

class WarehousesField extends Component {
  render() {
    const { loading, error, data, id } = this.props;

    if (loading) return null;
    if (error) console.error(error.message);

    const { warehouses } = data;

    return (
      <InputField
        disabled={loading}
        label="Almacén"
        name="warehouse"
        select
        fullWidth
        value={id && id ? id : null}
        required>
        {warehouses.map(item => (
          <MenuItem value={item.id} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </InputField>
    );
  }
}

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
    const input = {
      ...model,
      price: Number(model.price),
      stock: Number(model.stock)
    };
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
              title={data ? 'Editar Producto' : 'Nuevo Producto'}
              subtitle="Información del producto">
              <Formsy
                autoComplete="off"
                onValidSubmit={this.handleSubmit(mutate)}
                onValid={this.enableButton}
                onInvalid={this.disableButton}>
                <InputField
                  variant="outlined"
                  label="Nombre"
                  name="name"
                  placeholder="Nombre del producto"
                  autoFocus
                  fullWidth
                  required
                  value={data && data.name ? data.name : null}
                />
                <InputField
                  variant="outlined"
                  label="Precio"
                  name="price"
                  number
                  placeholder="0"
                  fullWidth
                  required
                  align="right"
                  value={data && data.price ? data.price : null}
                  endAdornment={
                    <InputAdornment position="end" style={{ width: 40 }}>
                      Bs. S
                    </InputAdornment>
                  }
                />
                <Grid container spacing={8}>
                  <Grid item xs={6}>
                    <InputField
                      variant="outlined"
                      label="Cantidad"
                      name="stock"
                      placeholder="0"
                      number
                      fullWidth
                      required
                      align="right"
                      value={data && data.stock ? data.stock : null}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputField
                      variant="outlined"
                      label="IVA"
                      name="iva"
                      fullWidth
                      required
                      value={data && data.iva ? data.iva : null}
                      select>
                      <MenuItem value="excento">Excento</MenuItem>
                      <MenuItem value="vigente">Vigente</MenuItem>
                    </InputField>
                  </Grid>
                </Grid>
                <Query query={GET_WAREHOUSES_QUERY}>
                  {({ subscribeToMore, ...rest }) => {
                    return (
                      <WarehousesField
                        id={data.warehouse.id}
                        {...rest}
                        subscribe={() =>
                          subscribeToMore({
                            document: WAREHOUSE_ADDED_SUBSCRIPTION,
                            updateQuery: (prev, { subscriptionData }) => {
                              if (!subscriptionData.data) return prev;
                              const { warehouseAdded } = subscriptionData.data;

                              return {
                                warehouses: [...prev.warehouses, warehouseAdded]
                              };
                            }
                          })
                        }
                      />
                    );
                  }}
                </Query>
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
