import React from 'react';
import { Field } from 'redux-form';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  MenuItem
} from '@material-ui/core';

// Atoms
// import InputField from '../../../components/Atoms/InputField';
import ReduxInputField from '../../../components/Atoms/ReduxInputField';

import { Plus, Trash2 } from 'react-feather';

function getValue(products, value) {
  const result = products.find(
    product => product._id === value && product.price
  );
  return result;
}

const ProductsTable = props => {
  const { fields, data } = props;
  const fieldProps = {
    style: { padding: '12px 12px', margin: 0, height: 93, marginTop: 12 },
    variant: 'outlined',
    fullWidth: true,
    noMargin: true,
    dense: true
  };
  const productss = [
    {
      name: 'prueba 1',
      _id: '1',
      price: 2001,
      stock: 88
    },
    {
      name: 'prueba 2',
      _id: '2',
      price: 2002,
      stock: 188
    },
    {
      name: 'prueba 3',
      _id: '3',
      price: 2003,
      stock: 828
    },
    {
      name: 'prueba 4',
      _id: '4',
      price: 2004,
      stock: 838
    }
  ];
  const dataInfo = [];
  if (data.products.length > 0) {
    data.products.forEach((item, itemIndex) => {
      if (item.product) {
        const info = getValue(productss, item.product);
        const total =
          item.quantity && item.quantity > 0 ? info.price * item.quantity : 0;
        const iva = item.iva && item.iva > 0 ? (total * item.iva) / 100 : 0;
        const totalIva = total + iva;
        dataInfo[itemIndex] = {
          stock: info.stock,
          price: info.price,
          total: totalIva
        };
      }
    });
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <Table style={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell padding="none" style={{ padding: '12px 20px' }}>
              Nombre del producto
            </TableCell>
            <TableCell align="center" padding="none" style={{ width: 100 }}>
              Disponible
            </TableCell>
            <TableCell align="center" padding="none" style={{ width: 150 }}>
              Precio
            </TableCell>
            <TableCell align="center" padding="none" style={{ width: 100 }}>
              Cantidad
            </TableCell>
            <TableCell align="center" padding="none" style={{ width: 100 }}>
              IVA
            </TableCell>
            <TableCell align="right" padding="none" style={{ width: 200 }}>
              Total
            </TableCell>
            <TableCell align="center" padding="none" style={{ width: 64 }}>
              <IconButton
                variant="contained"
                color="primary"
                onClick={() => fields.push({})}>
                <Plus size={24} />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fields.map((product, productIndex) => (
            <TableRow key={productIndex}>
              <TableCell
                padding="none"
                style={{ minWidth: 340, maxWidth: 340 }}>
                <Field
                  component={ReduxInputField}
                  name={`${product}.product`}
                  select
                  {...fieldProps}>
                  <MenuItem value="1">Persona natural 1</MenuItem>
                  <MenuItem value="2">Persona juridica 2</MenuItem>
                  <MenuItem value="3">Persona juridica 3</MenuItem>
                  <MenuItem value="4">Persona juridica 4</MenuItem>
                </Field>
              </TableCell>
              <TableCell align="center" padding="none">
                <Typography variant="body1">
                  {dataInfo[productIndex] ? dataInfo[productIndex].stock : 0}
                </Typography>
              </TableCell>
              <TableCell align="center" padding="none">
                <Typography variant="body1">
                  {dataInfo[productIndex] ? dataInfo[productIndex].price : 0} Bs
                </Typography>
              </TableCell>
              <TableCell padding="none">
                <Field
                  component={ReduxInputField}
                  name={`${product}.quantity`}
                  placeholder="0"
                  align="right"
                  {...fieldProps}
                />
              </TableCell>
              <TableCell padding="none">
                <Field
                  component={ReduxInputField}
                  name={`${product}.iva`}
                  select
                  {...fieldProps}>
                  <MenuItem value={0}>0%</MenuItem>
                  <MenuItem value={12}>12%</MenuItem>
                </Field>
              </TableCell>
              <TableCell align="right" padding="none">
                <Typography variant="body1">
                  {dataInfo[productIndex] ? dataInfo[productIndex].total : 0} Bs
                </Typography>
              </TableCell>
              <TableCell align="center" padding="none">
                <IconButton
                  color="primary"
                  onClick={
                    fields.length > 1 ? () => fields.remove(productIndex) : null
                  }>
                  <Trash2 size={24} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
