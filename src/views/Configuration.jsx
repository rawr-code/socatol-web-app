import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';

// Material UI
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  InputAdornment
} from '@material-ui/core';

// Layout
import MainContainer from '../Layout/MainContainer';

// Atoms
import InputFieldOld from '../components/Atoms/InputFieldOld';

// Molecules
import ContentHeader from '../components/Molecules/ContentHeader';

// Queries
import { GET_CONFIGURATION_QUERY } from '../queries/Configuration';

// Mutations
import {
  UPDATE_PRODUCT_IVA_MUTATION,
  UPDATE_INVOICE_SALE_NUMBER_MUTATION,
  UPDATE_INVOICE_PURCHASE_NUMBER_MUTATION
} from '../mutations/Configuration';

class DialogFormProductIva extends Component {
  state = {
    value: 0
  };

  handleOnChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = onSubmit => async e => {
    e.preventDefault();
    const { value } = this.state;
    const result = await onSubmit({
      variables: {
        input: {
          iva: Number(value)
        }
      }
    });
    if (result) {
      this.setState({ value: 0 });
      this.props.handleClose();
    }
    console.log(result);
  };

  render() {
    const { open, handleClose, value } = this.props;
    return (
      <Mutation mutation={UPDATE_PRODUCT_IVA_MUTATION}>
        {onSubmit => (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <form autoComplete="off">
              <DialogTitle id="form-dialog-title">
                Iva Vigente
                <DialogContentText>{value ? value : 0}%</DialogContentText>
              </DialogTitle>
              <DialogContent>
                <InputFieldOld
                  onChange={this.handleOnChange}
                  autoFocus
                  required
                  defaultValue={value ? value : 0}
                  variant="outlined"
                  margin="dense"
                  name="iva"
                  label="Nuevo IVA"
                  type="text"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    )
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button
                  onClick={this.handleSubmit(onSubmit)}
                  variant="contained"
                  color="primary"
                  type="submit">
                  Actualizar
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        )}
      </Mutation>
    );
  }
}

class DialogFormSaleInvoice extends Component {
  state = {
    value: 0
  };

  handleOnChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = onSubmit => async e => {
    e.preventDefault();
    const { value } = this.state;
    const result = await onSubmit({
      variables: {
        input: {
          number: Number(value)
        }
      }
    });
    if (result) {
      this.setState({ value: 0 });
      this.props.handleClose();
    }
    console.log(result);
  };

  render() {
    const { open, handleClose, value } = this.props;
    return (
      <Mutation mutation={UPDATE_INVOICE_SALE_NUMBER_MUTATION}>
        {onSubmit => (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <form autoComplete="off">
              <DialogTitle id="form-dialog-title">
                Factura de venta
                <DialogContentText>
                  Siguiente registro: #{value ? value : 0}
                </DialogContentText>
              </DialogTitle>
              <DialogContent>
                <InputFieldOld
                  onChange={this.handleOnChange}
                  autoFocus
                  required
                  defaultValue={value ? value : 0}
                  variant="outlined"
                  margin="dense"
                  name="number"
                  label="Número de factura"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">#</InputAdornment>
                    )
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button
                  onClick={this.handleSubmit(onSubmit)}
                  variant="contained"
                  color="primary"
                  type="submit">
                  Actualizar
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        )}
      </Mutation>
    );
  }
}

class DialogFormPurchaseInvoice extends Component {
  state = {
    value: 0
  };

  handleOnChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = onSubmit => async e => {
    e.preventDefault();
    const { value } = this.state;
    const result = await onSubmit({
      variables: {
        input: {
          number: Number(value)
        }
      }
    });
    if (result) {
      this.setState({ value: 0 });
      this.props.handleClose();
    }
    console.log(result);
  };

  render() {
    const { open, handleClose, value } = this.props;
    return (
      <Mutation mutation={UPDATE_INVOICE_PURCHASE_NUMBER_MUTATION}>
        {onSubmit => (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <form autoComplete="off">
              <DialogTitle id="form-dialog-title">
                Factura de venta
                <DialogContentText>
                  Siguiente registro: #{value ? value : 0}
                </DialogContentText>
              </DialogTitle>
              <DialogContent>
                <InputFieldOld
                  onChange={this.handleOnChange}
                  autoFocus
                  required
                  defaultValue={value ? value : 0}
                  variant="outlined"
                  margin="dense"
                  name="number"
                  label="Número de factura"
                  type="text"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">#</InputAdornment>
                    )
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button
                  onClick={this.handleSubmit(onSubmit)}
                  variant="contained"
                  color="primary"
                  type="submit">
                  Actualizar
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        )}
      </Mutation>
    );
  }
}

class ConfigurationContainer extends Component {
  state = {
    open: false
  };

  handleClickOpen = open => () => {
    this.setState({ open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <Query query={GET_CONFIGURATION_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Cargando configuracion';

          if (error) console.log('error', error);

          const { configuration } = data;

          return (
            <MainContainer>
              <DialogFormProductIva
                open={open === 'product'}
                handleClose={this.handleClose}
                value={configuration ? configuration.iva.product : 0}
              />
              <DialogFormSaleInvoice
                open={open === 'saleInvoice'}
                handleClose={this.handleClose}
                value={configuration ? configuration.invoice.sale.number : 0}
              />
              <DialogFormPurchaseInvoice
                open={open === 'purchaseInvoice'}
                handleClose={this.handleClose}
                value={
                  configuration ? configuration.invoice.purchase.number : 0
                }
              />
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6} md={4}>
                  <ContentHeader title="Productos" />
                  <Card>
                    <CardActionArea onClick={this.handleClickOpen('product')}>
                      <CardContent>
                        <Typography component="h2" variant="h6">
                          Producto
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          component="span">
                          IVA vigente
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <ContentHeader title="Facturas" />
                  <Card>
                    <CardActionArea
                      onClick={this.handleClickOpen('saleInvoice')}>
                      <CardContent>
                        <Typography component="h2" variant="h6">
                          Factura de venta
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          component="span">
                          Número inicial de factura
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Divider variant="middle" />
                    <CardActionArea
                      onClick={this.handleClickOpen('purchaseInvoice')}>
                      <CardContent>
                        <Typography component="h2" variant="h6">
                          Factura de compra
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          component="span">
                          Número inicial de factura
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </MainContainer>
          );
        }}
      </Query>
    );
  }
}

export default ConfigurationContainer;
