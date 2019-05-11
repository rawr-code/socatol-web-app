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

// Queries
import { GET_WAREHOUSES_QUERY } from '../../queries/Warehouse';

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
                />
                <InputField
                  variant="outlined"
                  label="Precio"
                  name="price"
                  placeholder="0"
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" style={{ width: 40 }}>
                        Bs. S
                      </InputAdornment>
                    )
                  }}
                />
                <Grid container spacing={8}>
                  <Grid item xs={6}>
                    <InputField
                      variant="outlined"
                      label="Cantidad"
                      name="stock"
                      placeholder="0"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputField
                      variant="outlined"
                      label="IVA"
                      name="iva"
                      fullWidth
                      required
                      select>
                      <MenuItem value="excento">Excento</MenuItem>
                      <MenuItem value="vigente">Vigente</MenuItem>
                    </InputField>
                  </Grid>
                </Grid>
                <Query query={GET_WAREHOUSES_QUERY}>
                  {({ loading, error, data }) => {
                    let isLoading = false;
                    let options = [];

                    if (loading) isLoading = true;

                    if (error) {
                      isLoading = false;
                      console.error(error.message);
                    }

                    if (data && Object.keys(data).length > 0) {
                      isLoading = false;
                      options = data.getWarehouses;
                    }
                    return (
                      <InputField
                        disabled={isLoading}
                        label="Almacén"
                        name="warehouse"
                        select
                        fullWidth
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
