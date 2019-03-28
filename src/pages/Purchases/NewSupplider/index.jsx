import React, { Fragment } from 'react';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

import Form from './Form';

const NewClient = props => {
  return (
    <Fragment>
      <FeatureBar title="Nuevo Proveedor" backArrow />
      <Form />
    </Fragment>
  );
};

export default NewClient;
