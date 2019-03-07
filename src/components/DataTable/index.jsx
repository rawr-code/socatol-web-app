import React, { Component } from 'react';

// DX React Grid
import {
  // Sorting
  SortingState,
  IntegratedSorting,
  // Search
  SearchState,
  IntegratedFiltering,
  // GroupRow
  GroupingState,
  IntegratedGrouping
} from '@devexpress/dx-react-grid';

// DX React Grid Material
import {
  Grid,
  VirtualTable,
  Toolbar,
  TableHeaderRow,
  // Search
  SearchPanel,
  // GroupRow
  TableGroupRow,
  GroupingPanel,
  DragDropProvider
} from '@devexpress/dx-react-grid-material-ui';

// Material UI
import {
  TableRow,
  TableCell,
  Toolbar as MuiToolbar,
  withStyles
} from '@material-ui/core';
import styles from './styles';

class DataTable extends Component {
  state = {
    rows: [],
    columns: [],
    tableColumnExtensions: [
      // { columnName: 'price', align: 'right' },
      { columnName: 'options', width: 70 }
    ]
  };

  render() {
    const { classes, columns, rows } = this.props;
    return (
      <Grid rows={rows} columns={columns}>
        <DragDropProvider />
        <SearchState />
        <SortingState
          defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
        />
        <GroupingState />

        <IntegratedSorting />
        <IntegratedFiltering />
        <IntegratedGrouping />

        <VirtualTable
          height={500}
          rowComponent={({ children, row }) => (
            <TableRow hover style={{ cursor: 'pointer' }}>
              {children}
            </TableRow>
          )}
          noDataRowComponent={() => (
            <TableRow>
              <TableCell className={classes.noData}>
                <big>No se encontraron datos</big>
              </TableCell>
            </TableRow>
          )}
        />
        {/* rowComponent */}
        <TableHeaderRow
          showSortingControls
          messages={{ sortingHint: 'Ordenar' }}
        />
        <TableGroupRow />

        <Toolbar
          rootComponent={({ children }) => (
            <MuiToolbar className={classes.toolbar}>{children}</MuiToolbar>
          )}
        />
        <SearchPanel messages={{ searchPlaceholder: 'Buscar...' }} />
        <GroupingPanel
          showGroupingControls
          messages={{
            groupByColumn:
              'Arrastre un encabezado de columna aquí para agrupar por esa columna'
          }}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(DataTable);
