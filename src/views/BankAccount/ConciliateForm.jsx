import React from 'react';
import { Query, Mutation } from 'react-apollo';

// Material UI
import { CardActions, Button } from '@material-ui/core';

// Molecules
import { FormMaterial, DataTable } from '../../components/Molecules';

// Queries
import { GET_SALES_INVOICES_QUERY } from '../../queries/Invoice';

// Mutations
import { CONCILIATE_MUTATION } from '../../mutations/BankAccount';

const ExtractForm = props => {
  const handleSubmit = async (mutate, values) => {
    const input = {
      transactionId: props.id,
      invoiceId: values.id
    };
    const result = await mutate({ variables: { input } });
    console.log(result);
  };

  const { handleClose } = props;

  return (
    <Mutation mutation={CONCILIATE_MUTATION} onCompleted={handleClose}>
      {mutate => {
        return (
          <FormMaterial
            md
            title={'Conciliar'}
            subtitle="Seleccione el documento que desea conciliar">
            <Query query={GET_SALES_INVOICES_QUERY}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) console.error(error.message);

                let { invoices: rows } = data;

                return (
                  <DataTable
                    columns={[
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
                        name: 'status',
                        title: 'Estado'
                      },
                      {
                        name: 'amount',
                        title: 'Monto'
                      }
                    ]}
                    rows={rows}
                    handleClick={values => handleSubmit(mutate, values)}
                  />
                );
              }}
            </Query>
            <CardActions>
              <Button color="primary" onClick={handleClose}>
                Cancelar
              </Button>
            </CardActions>
          </FormMaterial>
        );
      }}
    </Mutation>
  );
};

export default ExtractForm;
