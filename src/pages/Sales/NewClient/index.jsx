import React, { Fragment } from 'react';

// Molecules
import FeatureBar from '../../../components/Layout/FeatureBar';

import Form from './Form';

const NewClient = props => {
  return (
    <Fragment>
      <FeatureBar title="Nuevo Cliente" backArrow />
      <Form />
    </Fragment>
  );
};

export default NewClient;
