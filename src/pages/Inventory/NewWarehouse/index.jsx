import React, { Fragment } from 'react';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

import Form from './Form';

const NewSaleInvoice = props => {
  return (
    <Fragment>
      <FeatureBar title="Nuevo Almacén" backArrow />
      <Form onSubmit={values => console.log(values)} />
    </Fragment>
  );
};

export default NewSaleInvoice;
