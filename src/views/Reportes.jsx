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

import ProductImg from '../images/product.png';
import WarehouseImg from '../images/warehouse.png';

const modules = ['Ingresos', 'Gastos', 'Tesorería', 'Inventario'];
const categories = {
  Ingresos: ['Facturas de venta', 'Clientes'],
  Gastos: ['Facturas de compra', 'Proveedores'],
  Tesorería: ['Cuentas Bancarías'],
  Inventario: ['Almacenes', 'Productos']
};

const TableProducts = () => {
  return (
    <Query query={productQueries.GET_PRODUCTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { products } = data;
        return (
          <Table style={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Nombre</TableCell>
                <TableCell>Almacenados</TableCell>
                <TableCell align="right">Precio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(item => (
                <TableRow key={item.id}>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );
      }}
    </Query>
  );
};

const ProductoDetalles = ({ data: { id } }) => {
  // console.log('details', data);
  return (
    <Query query={productQueries.GET_PRODUCT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) console.error(error.message);
        console.log(data);

        let { product } = data;

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
                      {product.stock} Disponibles
                    </Typography>
                  </div>
                </div>
                <ContentHeader title="Lista de proveedores" />
              </CardContent>
              <Table style={{ minWidth: 700 }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell>Telefono</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Municipio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product.suppliders.length > 0 ? (
                    product.suppliders.map(item => (
                      <TableRow key={item.id}>
                        <TableCell align="left">{item.name}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.state}</TableCell>
                        <TableCell>{item.municipality}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <>
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          align="center"
                          style={{ border: 'none' }}
                        />
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          align="center"
                          style={{ border: 'none' }}>
                          No se encontraron resultados
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={4}
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
    <Query query={warehouseQueries.GET_WAREHOUSES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) console.log(error);

        const { warehouses } = data;
        return (
          <Table style={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Nombre</TableCell>
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
          <>
            <div>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={WarehouseImg} alt="imagen" />
                  <div style={{ marginLeft: 16 }}>
                    <Typography variant="subtitle1" color="textSecondary">
                      <b>Almacén</b>
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
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell align="right">Precio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {warehouse.products.map(item => (
                    <TableRow key={item.id}>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell>{item.stock}</TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
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
    }

    return <Vista />;
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
                            getOptionLabel={option => option.name}
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
