import React, { Fragment } from 'react';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

import Form from './Form';

const NewSaleInvoice = props => {
  return (
    <Fragment>
      <FeatureBar title="Nuevo Producto" backArrow />
      <Form />
    </Fragment>
  );
};

export default NewSaleInvoice;
