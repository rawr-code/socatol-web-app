import React from 'react';

// Atoms
import CardContainer from '../Atoms/CardContainer';

// Molecules
import DataTableHeader from '../Molecules/DataTableHeader';
import DataTable from '../Molecules/DataTable';

const FullDataTable = props => {
  const { header, table } = props;
  return (
    <CardContainer>
      <DataTableHeader {...header} />
      <DataTable {...table} />
    </CardContainer>
  );
};

export default FullDataTable;
