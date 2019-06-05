import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import { Query } from 'react-apollo';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
  TextField,
  Typography,
  MenuItem,
  Button,
  Grid
} from '@material-ui/core';

import { FeatureBar, MainContainer } from '../Layout';
import SelectField from '../components/Atoms/SelectField';

import ContentHeader from '../components/Molecules/ContentHeader';

// Queries
import * as productQueries from '../queries/Product';
import * as warehouseQueries from '../queries/Warehouse';
import * as invoiceQueries from '../queries/Invoice';
import * as personQueries from '../queries/Person';

import ProductImg from '../images/product.png';
import WarehouseImg from '../images/warehouse.png';
import invoiceImg from '../images/invoice.png';
import personImg from '../images/person.png';

const modules = ['Ingresos', 'Gastos', 'Inventario'];
const categories = {
  Ingresos: ['Facturas de venta', 'Clientes'],
  Gastos: ['Facturas de compra', 'Proveedores'],
  Inventario: ['Almacenes', 'Productos']
};

const TableProveedores = () => {
  return (
    <Query query={personQueries.GET_SUPPLIDERS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { persons } = data;
        console.log(persons);
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={personImg} alt="imageninvoice" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Lista de proveedores</b>
                  </Typography>
                </div>
              </div>
            </CardContent>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Cedula</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Telefono</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Municipio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {persons.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.dni}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.state}</TableCell>
                    <TableCell>{item.municipality}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const ProveedoresDetalles = ({ data: { id } }) => {
  return (
    <Query query={personQueries.GET_SUPPLIER_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { person } = data;
        console.log(person);
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={personImg} alt="imagen" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Proveedor</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nombre: {person.name}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <CardContent>
                <div>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Información del proveedor</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nombre: {person.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Telefono: {person.phone}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Estado: {person.state}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Municipio: {person.municipality}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Dirección: {person.address}
                  </Typography>
                </div>
              </CardContent>
              {/* <CardContent>
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Tipo de pago</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {invoice.paymentType}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Monto total</b>
                  </Typography>
                  <Typography variant="h4" color="textSecondary">
                    <b>{invoice.amount} Bs. S</b>
                  </Typography>
                </div>
              </CardContent> */}
            </div>
            <br />
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ marginLeft: 24 }}>
              <b>Facturas de compra</b>
            </Typography>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Fecha</TableCell>
                  <TableCell align="left">Número</TableCell>
                  <TableCell>Tipo de pago</TableCell>
                  <TableCell align="right">Monto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {person.invoices.purchase.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{item.dateEmit}</TableCell>
                    <TableCell align="left">{item.number}</TableCell>
                    <TableCell>{item.paymentType}</TableCell>
                    <TableCell align="right">
                      <b>{item.amount} Bs. S</b>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const TableClientes = () => {
  return (
    <Query query={personQueries.GET_CLIENTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { persons } = data;
        console.log(persons);
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={personImg} alt="imageninvoice" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Lista de clientes</b>
                  </Typography>
                </div>
              </div>
            </CardContent>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Cedula</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Telefono</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Municipio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {persons.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.dni}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.state}</TableCell>
                    <TableCell>{item.municipality}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const ClientesDetalles = ({ data: { id } }) => {
  return (
    <Query query={personQueries.GET_CLIENT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { person } = data;
        console.log(person);
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={personImg} alt="imagen" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Cliente</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nombre: {person.name}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <CardContent>
                <div>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Información del cliente</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nombre: {person.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Telefono: {person.phone}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Estado: {person.state}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Municipio: {person.municipality}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Dirección: {person.address}
                  </Typography>
                </div>
              </CardContent>
              {/* <CardContent>
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Tipo de pago</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {invoice.paymentType}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Monto total</b>
                  </Typography>
                  <Typography variant="h4" color="textSecondary">
                    <b>{invoice.amount} Bs. S</b>
                  </Typography>
                </div>
              </CardContent> */}
            </div>
            <br />
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ marginLeft: 24 }}>
              <b>Facturas de venta</b>
            </Typography>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Fecha</TableCell>
                  <TableCell align="left">Número</TableCell>
                  <TableCell>Tipo de pago</TableCell>
                  <TableCell align="right">Monto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {person.invoices.sale.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{item.dateEmit}</TableCell>
                    <TableCell align="left">{item.number}</TableCell>
                    <TableCell>{item.paymentType}</TableCell>
                    <TableCell align="right">
                      <b>{item.amount} Bs. S</b>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const TableIngresos = () => {
  return (
    <Query query={invoiceQueries.GET_SALES_INVOICES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { invoices } = data;
        console.log(invoices);
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={invoiceImg} alt="imageninvoice" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Lista de facturas de venta</b>
                  </Typography>
                </div>
              </div>
            </CardContent>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Fecha</TableCell>
                  <TableCell align="left">Cliente</TableCell>
                  <TableCell align="left">Número de factura</TableCell>
                  <TableCell align="right">Tipo de pago</TableCell>
                  <TableCell align="right">Monto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map(item => (
                  <TableRow key={item.id}>
                    <TableCell align="left">{item.dateEmit}</TableCell>
                    <TableCell align="left">{item.person}</TableCell>
                    <TableCell align="left">{item.number}</TableCell>
                    <TableCell align="left">{item.paymentType}</TableCell>
                    <TableCell align="right">
                      <b>{item.amount} Bs. S</b>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const IngresosDetalles = ({ data: { id } }) => {
  return (
    <Query query={invoiceQueries.GET_INVOICE_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { invoice } = data;
        console.log(invoice);
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={invoiceImg} alt="imagen" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Factura de venta</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Número: {invoice.number}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Fecha de emisión: {invoice.dateEmit}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <CardContent>
                <div>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Cliente</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nombre: {invoice.person.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Telefono: {invoice.person.phone}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Estado: {invoice.person.state}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Municipio: {invoice.person.municipality}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Dirección: {invoice.person.address}
                  </Typography>
                </div>
              </CardContent>
              <CardContent>
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Tipo de pago</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {invoice.paymentType}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Monto total</b>
                  </Typography>
                  <Typography variant="h4" color="textSecondary">
                    <b>{invoice.amount} Bs. S</b>
                  </Typography>
                </div>
              </CardContent>
            </div>
            <br />
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ marginLeft: 24 }}>
              <b>Productos</b>
            </Typography>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nombre del producto</TableCell>
                  <TableCell>cantidad vendida</TableCell>
                  <TableCell align="right">Precio unitario</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoice.products.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell align="right">
                      <b>{item.price} Bs. S</b>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const TableGastos = () => {
  return (
    <Query query={invoiceQueries.GET_PURCHASES_INVOICES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { invoices } = data;
        console.log(invoices);
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={invoiceImg} alt="imageninvoice" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Lista de facturas de compra</b>
                  </Typography>
                </div>
              </div>
            </CardContent>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Fecha</TableCell>
                  <TableCell align="left">Proveedor</TableCell>
                  <TableCell align="left">Número de factura</TableCell>
                  <TableCell align="right">Tipo de pago</TableCell>
                  <TableCell align="right">Monto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map(item => (
                  <TableRow key={item.id}>
                    <TableCell align="left">{item.dateEmit}</TableCell>
                    <TableCell align="left">{item.person}</TableCell>
                    <TableCell align="left">{item.number}</TableCell>
                    <TableCell align="left">{item.paymentType}</TableCell>
                    <TableCell align="right">
                      <b>{item.amount} Bs. S</b>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const GastosDetalles = ({ data: { id } }) => {
  return (
    <Query query={invoiceQueries.GET_INVOICE_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { invoice } = data;
        console.log(invoice);
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={invoiceImg} alt="imagen" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Factura de compra</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Número: {invoice.number}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Fecha de emisión: {invoice.dateEmit}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <CardContent>
                <div>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Proveedor</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Nombre: {invoice.person.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Telefono: {invoice.person.phone}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Estado: {invoice.person.state}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Municipio: {invoice.person.municipality}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Dirección: {invoice.person.address}
                  </Typography>
                </div>
              </CardContent>
              <CardContent>
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Tipo de pago</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {invoice.paymentType}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Monto total</b>
                  </Typography>
                  <Typography variant="h4" color="textSecondary">
                    <b>{invoice.amount} Bs. S</b>
                  </Typography>
                </div>
              </CardContent>
            </div>
            <br />
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ marginLeft: 24 }}>
              <b>Productos</b>
            </Typography>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nombre del producto</TableCell>
                  <TableCell>Cantidad comprada</TableCell>
                  <TableCell align="right">Precio unitario</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoice.products.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell align="right">
                      <b>{item.price} Bs. S</b>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const TableProducts = () => {
  return (
    <Query query={productQueries.GET_PRODUCTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { products } = data;
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={ProductImg} alt="imagen" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Lista de productos</b>
                  </Typography>
                </div>
              </div>
            </CardContent>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nombre del producto</TableCell>
                  <TableCell>Almacenados</TableCell>
                  <TableCell align="right">Precio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(item => (
                  <TableRow key={item.id}>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell>{item.stock}</TableCell>
                    <TableCell align="right">
                      <b>{item.price} Bs. S</b>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const ProductoDetalles = ({ data: { id } }) => {
  return (
    <Query query={productQueries.GET_PRODUCT_OTHER_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) console.error(error.message);
        console.log(data);

        let { productsOther: product } = data;

        return (
          <>
            <div>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={ProductImg} alt="imagen" />
                  <div style={{ marginLeft: 16 }}>
                    <Typography variant="subtitle1" color="textSecondary">
                      <b>Producto</b>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {product.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {product.stock} Almacenados
                    </Typography>
                  </div>
                </div>
              </CardContent>

              <Typography
                variant="subtitle1"
                color="textSecondary"
                style={{ marginLeft: 24 }}>
                <b>Lista de proveedores</b>
              </Typography>

              <Table style={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nombre del proveedor</TableCell>
                    <TableCell>Telefono</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Municipio</TableCell>
                    <TableCell>Fecha de ultima compra</TableCell>
                    <TableCell>Monto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product.suppliders.length > 0 ? (
                    product.suppliders.map((item, index) => {
                      let amount = 0;
                      let datee = '';

                      item.prices.forEach((i, index) => {
                        if (index === item.prices.length - 1) {
                          datee = i.date;
                          amount = i.amount;
                        }
                      });
                      return (
                        <TableRow key={index}>
                          <TableCell align="left">{item.person.name}</TableCell>
                          <TableCell>{item.person.phone}</TableCell>
                          <TableCell>{item.person.state}</TableCell>
                          <TableCell>{item.person.municipality}</TableCell>
                          <TableCell>{datee}</TableCell>
                          <TableCell>
                            <b>{amount} Bs. S</b>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <>
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          align="center"
                          style={{ border: 'none' }}
                        />
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          align="center"
                          style={{ border: 'none' }}>
                          No se encontraron resultados
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          align="center"
                          style={{ border: 'none' }}
                        />
                      </TableRow>
                    </>
                  )}
                </TableBody>
              </Table>

              <br />

              <Typography
                variant="subtitle1"
                color="textSecondary"
                style={{ marginLeft: 24 }}>
                <b>Lista de clientes</b>
              </Typography>

              <Table style={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nombre del cliente</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Municipio</TableCell>
                    <TableCell>Fecha de ultima venta</TableCell>
                    <TableCell>Ultima venta</TableCell>
                    <TableCell>Total vendido</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product.clients.length > 0 ? (
                    product.clients.map((item, index) => {
                      let total = 0;
                      let datee = '';
                      let ultima = '';
                      item.quantitys.forEach((i, index) => {
                        total += i.quantity;
                        if (index === item.quantitys.length - 1) {
                          datee = i.date;
                          ultima = i.quantity;
                        }
                      });
                      return (
                        <TableRow key={index}>
                          <TableCell align="left">{item.person.name}</TableCell>
                          <TableCell>{item.person.state}</TableCell>
                          <TableCell>{item.person.municipality}</TableCell>
                          <TableCell>{datee}</TableCell>
                          <TableCell>{ultima}</TableCell>
                          <TableCell>{total}</TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <>
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          align="center"
                          style={{ border: 'none' }}
                        />
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          align="center"
                          style={{ border: 'none' }}>
                          No se encontraron resultados
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          align="center"
                          style={{ border: 'none' }}
                        />
                      </TableRow>
                    </>
                  )}
                </TableBody>
              </Table>
            </div>
          </>
        );
      }}
    </Query>
  );
};

const TableAlmacenes = () => {
  return (
    <Query query={warehouseQueries.GET_WAREHOUSES1_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { warehouses } = data;
        return (
          <>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={WarehouseImg} alt="imageninvoice" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Lista de almacenes</b>
                  </Typography>
                </div>
              </div>
            </CardContent>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nombre del almacén</TableCell>
                  <TableCell align="right">Productos almacenados</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {warehouses.map(item => (
                  <TableRow key={item.id}>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="right">{item.products.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        );
      }}
    </Query>
  );
};

const AlmacenDetalles = ({ data: { id } }) => {
  // console.log('details', data);
  return (
    <Query query={warehouseQueries.GET_WAREHOUSE_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) console.error(error.message);
        console.log(data);

        let { warehouse } = data;

        return (
          <div>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={WarehouseImg} alt="imagen" />
                <div style={{ marginLeft: 16 }}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <b>Nombre del almacén</b>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {warehouse.name}
                  </Typography>
                </div>
              </div>
              <ContentHeader title="Lista de productos almacenados" />
            </CardContent>
            <Table style={{ minWidth: 700 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nombre del producto</TableCell>
                  <TableCell>Almacenado</TableCell>
                  <TableCell align="right">Precio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {warehouse.products.map(item => (
                  <TableRow key={item.id}>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell>{item.stock}</TableCell>
                    <TableCell align="right">
                      <b>{item.price} Bs. S</b>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      }}
    </Query>
  );
};

class ComponentToPrint extends React.Component {
  render() {
    const { data, category } = this.props;
    console.log(data);
    let Vista = null;
    if (category === 'Productos') {
      if (data) Vista = () => <ProductoDetalles data={data} />;
      else Vista = () => <TableProducts />;
    } else if (category === 'Almacenes') {
      if (data) Vista = () => <AlmacenDetalles data={data} />;
      else Vista = () => <TableAlmacenes />;
    } else if (category === 'Facturas de venta') {
      if (data) Vista = () => <IngresosDetalles data={data} />;
      else Vista = () => <TableIngresos />;
    } else if (category === 'Facturas de compra') {
      if (data) Vista = () => <GastosDetalles data={data} />;
      else Vista = () => <TableGastos />;
    } else if (category === 'Clientes') {
      if (data) Vista = () => <ClientesDetalles data={data} />;
      else Vista = () => <TableClientes />;
    } else if (category === 'Proveedores') {
      if (data) Vista = () => <ProveedoresDetalles data={data} />;
      else Vista = () => <TableProveedores />;
    }

    return (
      <div>
        <Vista />
      </div>
    );
  }
}

class ReportesContainer extends Component {
  state = {
    module: '',
    category: '',
    type: '',
    item: '',
    data: ''
  };

  handleChange = name => event => {
    if (name === 'module') {
      this.setState({
        category: '',
        type: '',
        item: '',
        data: ''
      });
    }
    if (name === 'category') {
      this.setState({
        type: '',
        item: '',
        data: ''
      });
    }
    if (name === 'item') {
      this.setState({
        item: event
      });
    }
    if (name === 'type') {
      this.setState({
        item: '',
        data: ''
      });
    }
    if (name !== 'item') {
      this.setState({
        [name]: event.target.value
      });
    }
  };

  setData = data => {
    this.setState({ data });
  };

  render() {
    const { category } = this.state;
    let query, label, placeholder, result;
    if (category === 'Facturas de venta') {
      query = invoiceQueries.GET_SALES_INVOICES_QUERY;
      label = 'Factura';
      placeholder = 'Seleccione una factura';
      result = 'invoices';
    }
    if (category === 'Facturas de compra') {
      query = invoiceQueries.GET_PURCHASES_INVOICES_QUERY;
      label = 'Factura';
      placeholder = 'Seleccione una factura';
      result = 'invoices';
    }
    if (category === 'Productos') {
      query = productQueries.GET_PRODUCTS_QUERY;
      label = 'Producto';
      placeholder = 'Seleccione un producto';
      result = 'products';
    }
    if (category === 'Almacenes') {
      query = warehouseQueries.GET_WAREHOUSES_QUERY;
      label = 'Almacén';
      placeholder = 'Seleccione un almacén';
      result = 'warehouses';
    }
    if (category === 'Clientes') {
      query = personQueries.GET_CLIENTS_QUERY;
      label = 'Cliente';
      placeholder = 'Seleccione un cliente';
      result = 'persons';
    }
    if (category === 'Proveedores') {
      query = personQueries.GET_SUPPLIDERS_QUERY;
      label = 'Proveedor';
      placeholder = 'Seleccione un proveedor';
      result = 'persons';
    }

    return (
      <>
        <FeatureBar title="Reportes" />
        <MainContainer>
          <ContentHeader title="Generador de reportes" />
          <Card>
            <CardContent>
              <Grid container spacing={8} alignItems="center">
                <Grid item xs={3}>
                  <TextField
                    select
                    label="Modulo"
                    margin="dense"
                    variant="outlined"
                    value={this.state.module}
                    onChange={this.handleChange('module')}
                    fullWidth>
                    {modules.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  {this.state.module && (
                    <TextField
                      select
                      label="Categoría"
                      margin="dense"
                      variant="outlined"
                      value={this.state.category}
                      onChange={this.handleChange('category')}
                      fullWidth>
                      {this.state.module ? (
                        categories[this.state.module].map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem value="" disabled>
                          No hay datos
                        </MenuItem>
                      )}
                    </TextField>
                  )}
                </Grid>
                <Grid item xs={3}>
                  {this.state.category && (
                    <TextField
                      select
                      label="Tipo"
                      margin="dense"
                      variant="outlined"
                      value={this.state.type}
                      onChange={this.handleChange('type')}
                      fullWidth>
                      <MenuItem value="General">General</MenuItem>
                      <MenuItem value="Especifico">Especifico</MenuItem>
                    </TextField>
                  )}
                </Grid>
                <Grid item xs={3}>
                  {this.state.type === 'Especifico' && (
                    <Query query={query}>
                      {({ loading, error, data }) => {
                        if (loading) return null;
                        if (error) console.log(error);
                        return (
                          <SelectField
                            options={data[result]}
                            isClearable={false}
                            label={label}
                            noOptionsMessage={() => 'No se contraron datos'}
                            loadingMessage={() => 'Cargando...'}
                            placeholder={placeholder}
                            getOptionValue={option => option.id}
                            getOptionLabel={option =>
                              option.name ? option.name : option.number
                            }
                            name="item"
                            onChange={this.handleChange('item')}
                            value={this.state.item}
                          />
                        );
                      }}
                    </Query>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <br />
          {this.state.type === 'General' && (
            <>
              <ContentHeader title="Reporte General">
                <ReactToPrint
                  trigger={() => (
                    <Button variant="contained" color="primary">
                      Imprimir
                    </Button>
                  )}
                  content={() => this.componentRef}
                />
              </ContentHeader>
              <Card>
                <ComponentToPrint
                  ref={el => (this.componentRef = el)}
                  category={this.state.category}
                  type={this.state.type}
                />
              </Card>
            </>
          )}
          {this.state.item && (
            <>
              <ContentHeader title="Reporte Especifico">
                <ReactToPrint
                  trigger={() => (
                    <Button variant="contained" color="primary">
                      Imprimir
                    </Button>
                  )}
                  content={() => this.componentRef}
                />
              </ContentHeader>
              <Card>
                <ComponentToPrint
                  ref={el => (this.componentRef = el)}
                  category={this.state.category}
                  type={this.state.type}
                  data={this.state.item}
                />
              </Card>
            </>
          )}
        </MainContainer>
      </>
    );
  }
}

export default ReportesContainer;
