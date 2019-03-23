import React from 'react';
import { Card, withStyles } from '@material-ui/core';

// Molecules
import DataTableHeader from '../../Molecules/DataTableHeader';
import DataTable from '../../Molecules/DataTable';

import styles from './styles';

const FullDataTable = props => {
  const { classes, header, table } = props;
  return (
    <Card className={classes.root}>
      <DataTableHeader {...header} />
      <DataTable {...table} />
    </Card>
  );
};

export default withStyles(styles)(FullDataTable);
