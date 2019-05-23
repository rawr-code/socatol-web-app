import React from 'react';
import { Query } from 'react-apollo';

// Material UI
import {
  Grid,
  CardContent,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormHelperText,
  Icon,
  Button,
  InputAdornment
} from '@material-ui/core';

import { Box, X } from 'react-feather';

// Atoms
import InputFieldOld from '../../../components/Atoms/InputFieldOld';
import SelectField from '../../../components/Atoms/SelectField';

// Queries
import { GET_PRODUCTS_QUERY } from '../../../queries/Product';

const ProductListForm = props => {
  const { handleChange, data: rows, handleTest, handleNewProduct } = props;

  const handleRemove = id => () => {
    let products = rows;
    products = products.filter(product => product.id !== id);

    handleChange(products);
  };

  const handleQuantityProduct = index => e => {
    let products = rows;
    let product = products[index];
    const { value } = e.target;

    if (value !== '') {
      product.quantity = Number(value);
      product.total = product.price * Number(value);
    } else {
      product.quantity = 0;
      product.total = 0;
    }

    products[index] = product;

    handleChange(products);
  };
  return (
    <>
      <CardContent style={{ minWidth: 600 }}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Query query={GET_PRODUCTS_QUERY}>
              {({ loading, error, data }) => {
                if (error) console.error(error);

                let { products } = data;

                return (
                  <div>
                    <SelectField
                      options={products}
                      isLoading={loading}
                      // isClearable={false}
                      isMulti
                      noOptionsMessage={() => 'No se contraron datos'}
                      loadingMessage={() => 'Cargando...'}
                      placeholder="Seleccionar productos"
                      getOptionValue={option => option.id}
                      getOptionLabel={option => option.name}
                      onChange={handleChange}
                      value={rows}
                    />
                    <Button
                      color="primary"
                      onClick={handleTest}
                      style={{ marginTop: 8 }}>
                      Añadir nuevo producto
                    </Button>
                  </div>
                );
              }}
            </Query>
          </Grid>
        </Grid>
      </CardContent>

      {rows.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" padding="dense">
                Nombre
              </TableCell>
              <TableCell align="right" style={{ width: 200, padding: '0 8px' }}>
                Precio
              </TableCell>
              <TableCell align="center" style={{ width: 96, padding: '0 8px' }}>
                Cantidad
              </TableCell>
              <TableCell align="right" style={{ width: 200, padding: '0 8px' }}>
                Subtotal
              </TableCell>
              <TableCell align="center" padding="none" style={{ width: 56 }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              if (row.isNew) {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" padding="dense">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon color="primary">
                          <Box size={24} />
                        </Icon>
                        <div
                          style={{
                            marginLeft: 20,
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%'
                          }}>
                          <InputFieldOld
                            variant="outlined"
                            name="name"
                            onChange={handleNewProduct(index)}
                            dense
                            style={{ margin: '8px 0' }}
                            defaultValue={row.name}
                            fullWidth
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right" style={{ padding: '0 8px' }}>
                      <InputFieldOld
                        variant="outlined"
                        name="price"
                        onChange={handleNewProduct(index)}
                        dense
                        style={{ margin: '8px 0' }}
                        defaultValue={row.price}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              style={{ minWidth: 40 }}>
                              Bs. S
                            </InputAdornment>
                          )
                        }}
                      />
                    </TableCell>
                    <TableCell align="right" style={{ padding: '0 8px' }}>
                      <InputFieldOld
                        variant="outlined"
                        name="quantity"
                        onChange={handleQuantityProduct(index)}
                        dense
                        style={{ margin: '8px 0' }}
                        defaultValue={row.quantity}
                      />
                    </TableCell>
                    <TableCell align="right" style={{ padding: '0 8px' }}>
                      {row.total ? row.total : 0} Bs. S
                    </TableCell>
                    <TableCell align="center" padding="none">
                      <IconButton onClick={handleRemove(row.id)}>
                        <X size={16} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              }
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" padding="dense">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Icon color="primary">
                        <Box size={24} />
                      </Icon>
                      <div
                        style={{
                          marginLeft: 20,
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                        <span>{row.name}</span>
                        <FormHelperText style={{ marginTop: 4 }}>
                          Disponibles: {row.stock}
                        </FormHelperText>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right" style={{ padding: '0 8px' }}>
                    {row.price} Bs. S
                  </TableCell>
                  <TableCell align="right" style={{ padding: '0 8px' }}>
                    <InputFieldOld
                      variant="outlined"
                      name="quantity"
                      onChange={handleQuantityProduct(index)}
                      dense
                      style={{ margin: '8px 0' }}
                      defaultValue={row.quantity}
                    />
                  </TableCell>
                  <TableCell align="right" style={{ padding: '0 8px' }}>
                    {row.total ? row.total : 0} Bs. S
                  </TableCell>
                  <TableCell align="center" padding="none">
                    <IconButton onClick={handleRemove(row.id)}>
                      <X size={16} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default ProductListForm;
