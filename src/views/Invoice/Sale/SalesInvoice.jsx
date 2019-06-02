import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
// Layout
import { MainContainer } from '../../../Layout';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../../components/Molecules';

// Queries
import { GET_SALES_INVOICES_QUERY } from '../../../queries/Invoice';
import Notification from '../../../components/Notification';

// Subscriptions
import { SALE_ADDED_SUBSCRIPTION } from '../../../subscriptions/Invoice';

import SalesInvoiceForm from './SalesInvoiceForm';

class DataContainer extends Component {
  componentDidMount() {
    this.props.subscribe();
  }

  render() {
    const { loading, error, data, history } = this.props;
    if (loading) return null;
    if (error) console.error(error.message);

    const { invoices } = data;

    const columns = [
      {
        name: 'dateEmit',
        title: 'Fecha'
      },
      {
        name: 'person',
        title: 'Cliente'
      },
      {
        name: 'number',
        title: 'Número'
      },
      {
        name: 'paymentType',
        title: 'Tipo de pago'
      },
      {
        name: 'amount',
        title: 'Monto'
      }
    ];
    return (
      <DataTable
        columns={columns}
        rows={invoices}
        handleClick={({ id }) => history.push(`/ingresos/factura-venta/${id}`)}
      />
    );
  }
}

const SalesInvoice = ({ history }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <MainContainer>
      <ContentHeader title="Lista de facturas de venta">
        <ButtonDialogForm
          title="Facturar venta"
          scroll="body"
          form={SalesInvoiceForm}
          mutation={'NEW_WAREHOUSE_MUTATION'}
          success={setIsOpen}
        />
        <Notification
          open={isOpen}
          handleOpen={setIsOpen}
          message="Guardado con exito!"
        />
      </ContentHeader>
      {/* <Query query={GET_SALES_INVOICES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) console.error(error);

          let { invoices } = data;

          console.log(data);
          return null;
        }}
      </Query> */}
      <Query query={GET_SALES_INVOICES_QUERY}>
        {({ subscribeToMore, ...rest }) => {
          console.log(rest);
          return (
            <DataContainer
              {...rest}
              history={history}
              subscribe={() =>
                subscribeToMore({
                  document: SALE_ADDED_SUBSCRIPTION,
                  updateQuery: (prev, { subscriptionData }) => {
                    if (!subscriptionData.data) return prev;
                    console.log(subscriptionData);
                    const { saleAdded } = subscriptionData.data;
                    return { invoices: [...prev.invoices, saleAdded] };
                  }
                })
              }
            />
          );
        }}
      </Query>
    </MainContainer>
  );
};

export default withRouter(SalesInvoice);
