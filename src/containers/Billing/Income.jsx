import React, { Component } from 'react';

// Components
import CardContainer from '../../components/CardContainer';
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';
import AutoComplete from './AutoComplete';
import AutoComplete1 from './AutoComplete.1';
import Lista from './Lista';

import { Grid, TextField, Typography, Button } from '@material-ui/core';

class IncomeContainer extends Component {
  render() {
    return (
      <div style={{ maxWidth: 450, margin: '0 auto' }}>
        <CardContainer>
          {/* <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/purchase-order.png"
          title="Compras"
          subtitle="Lista de facturas de compras"
          buttonLabel="Facturar Compra"
          button
        />
        <DataTable /> */}
          <Grid
            style={{ display: 'flex', flexDirection: 'column', padding: 24 }}
            container>
            <Grid item xs={12}>
              <Grid item xs={4}>
                <TextField
                  id="standard-name2"
                  label="N° de factura"
                  value={'000005'}
                  margin="normal"
                  disabled
                />
              </Grid>
              <TextField
                id="standard-name"
                label="Fecha de emisión"
                margin="normal"
                value="0"
                type="date"
                style={{ marginRight: 16 }}
              />
              <TextField
                id="standard-name1"
                label="Fecha de vencimineto"
                margin="normal"
                value="0"
                type="date"
                // style={{ marginRight: 16 }}
              />
              <div style={{ maxWidth: 300 }}>
                <AutoComplete />
              </div>
              <Typography variant="h6" component="h2" style={{ marginTop: 20 }}>
                Lista de productos
              </Typography>
              <div style={{ maxWidth: 350 }}>
                <AutoComplete1 />
              </div>
              <div
                style={{
                  marginTop: 20,
                  borderTop: '1px solid rgba(0,0,0,0.12)'
                }}>
                <Lista />
              </div>
            </Grid>
          </Grid>
          <div
            style={{
              padding: 20,
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
            <Button color="primary">Cancelar</Button>
            <Button variant="contained" color="primary">
              Guardar
            </Button>
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default IncomeContainer;
