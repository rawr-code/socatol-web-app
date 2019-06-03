import React, { useState } from 'react';
import { Query } from 'react-apollo';

// Material UI
import { Grid, Dialog } from '@material-ui/core';

// Layout
import { MainContainer } from '../../Layout';

// Molecules
import {
  ContentHeader,
  ButtonDialogForm,
  DataTable
} from '../../components/Molecules';

// Queries
import { GET_BANKACCOUNT_TRANSACTIONS_QUERY } from '../../queries/BankAccount';

// Mutations
import { UPLOADFILE_MUTATION } from '../../mutations/UploadFile';

// Forms
import ExtractForm from './ExtractForm';
import ConciliateForm from './ConciliateForm';

const BankAccountTransactions = props => {
  const { id } = props.data;
  const { session } = props;
  const [open, setOpen] = useState(false);
  const [itemSelect, setItemSelect] = useState('');

  const handleClickOpen = ({ id }) => {
    setItemSelect(id);
    setOpen(true);
  };

  const handleClose = () => {
    setItemSelect('');
    setOpen(false);
  };

  const columns = [
    {
      name: 'date',
      title: 'Fecha'
    },
    {
      name: 'ref',
      title: 'Referencia'
    },
    {
      name: 'concept',
      title: 'Concepto'
    },
    {
      name: 'status',
      title: 'Estado'
    },
    {
      name: 'amount',
      title: 'Importe'
    },
    {
      name: 'balance',
      title: 'Saldo'
    }
  ];

  return (
    <MainContainer>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <ContentHeader title="Extracto Bancario">
            {session.role !== 'CONSULTOR' && (
              <ButtonDialogForm
                title="Cargar extracto bancario"
                form={ExtractForm}
                mutation={UPLOADFILE_MUTATION}
                id={id}
              />
            )}
          </ContentHeader>
          <Dialog open={open} PaperComponent="div" maxWidth="md" scroll="body">
            <ConciliateForm handleClose={handleClose} id={itemSelect} />
          </Dialog>
          <Query query={GET_BANKACCOUNT_TRANSACTIONS_QUERY} variables={{ id }}>
            {({ loading, error, data, refetch }) => {
              if (loading) return null;
              if (error) console.error(error.message);

              let { bankAccountTransactions: rows } = data;

              return (
                <DataTable
                  columns={columns}
                  rows={rows}
                  handleClick={values => handleClickOpen(values, refetch)}
                />
              );
            }}
          </Query>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default BankAccountTransactions;
