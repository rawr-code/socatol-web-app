import React from 'react';
import { Query } from 'react-apollo';

// Material UI
import {
  Grid,
  CardContent,
  Button,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormHelperText,
  Icon
} from '@material-ui/core';

import { Box, X } from 'react-feather';
// Layout
import MainContainer from '../../components/Layout/MainContainer';

// Atoms
import InputField from '../../components/Atoms/InputField';
import SelectField from '../../components/Atoms/SelectField';

// Organisms
import { FormMaterial } from '../../components/Organisms';

// Queries
import { GET_PRODUCTS_QUERY } from '../../queries/Product';

const ProductListForm = props => {
  const {
    handleAddProduct,
    handleQuantityProduct,
    handleRemoveProduct,
    next,
    back,
    data: rows
  } = props;
  return (
    <MainContainer>
      <FormMaterial
        md
        title={'Productos'}
        subtitle="Lista de productos"
        actions={
          <>
            <Button color="primary" onClick={back}>
              Volver
            </Button>
            <Button variant="contained" color="primary" onClick={next}>
              Siguiente
            </Button>
          </>
        }>
        <CardContent>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Query query={GET_PRODUCTS_QUERY}>
                {({ loading, error, data }) => {
                  let options = [];

                  if (error) console.log(`Error: ${error}`);

                  if (data.getProducts) options = data.getProducts;

                  return (
                    <SelectField
                      options={options}
                      isLoading={loading}
                      isClearable={false}
                      isMulti
                      noOptionsMessage={() => 'No se contraron datos'}
                      loadingMessage={() => 'Cargando...'}
                      placeholder="Seleccionar productos"
                      getOptionValue={option => option.id}
                      getOptionLabel={option => option.name}
                      onChange={handleAddProduct}
                      value={rows}
                    />
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
                <TableCell
                  align="right"
                  style={{ width: 150, padding: '0 8px' }}>
                  Precio
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: 96, padding: '0 8px' }}>
                  Cantidad
                </TableCell>
                <TableCell
                  align="right"
                  style={{ width: 150, padding: '0 8px' }}>
                  Subtotal
                </TableCell>
                <TableCell
                  align="center"
                  padding="none"
                  style={{ width: 56 }}
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
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
                    <InputField
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
                    <IconButton onClick={handleRemoveProduct(row.id)}>
                      <X size={16} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </FormMaterial>
    </MainContainer>
  );
};

// connect to router
export default ProductListForm;
