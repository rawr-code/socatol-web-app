import React, { Fragment } from 'react';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

import Form from './Form';

const NewSaleInvoice = props => {
  return (
    <Fragment>
      <FeatureBar title="Factura Venta" backArrow />
      <Form />
    </Fragment>
  );
};

export default NewSaleInvoice;
