import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { FeatureBar } from '../../components/Layout';

// Queries
import { GET_PRODUCT_QUERY } from '../../queries/Product';

const DetailsProduct = props => {
  const { id } = props.match.params;
  return (
    <Query query={GET_PRODUCT_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';

        if (error) return `Error: ${error.message}`;

        const product = data.getProduct;
        console.log(product);

        return (
          <>
            <FeatureBar
              title={product.name}
              subtitle={product.warehouse.name}
              back
            />
            <p>Precio: {product.price}</p>
            <p>Almacenado: {product.stock}</p>
            <p>Descripción: {product.description}</p>
          </>
        );
      }}
    </Query>
  );
};

export default DetailsProduct;
