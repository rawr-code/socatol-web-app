import React, { Component } from 'react';

// Material UI
import { TableRow } from '@material-ui/core';

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

class DataTable extends Component {
  render() {
    const { rows = [], columns = [], openModal } = this.props;
    return (
      <Grid rows={rows} columns={columns} style={{ height: '100%' }}>
        <DragDropProvider />
        <SearchState />
        <SortingState
          defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
        />
        <GroupingState
          columnExtensions={[{ columnName: 'options', groupingEnabled: false }]}
        />

        <IntegratedSorting />
        <IntegratedFiltering />
        <IntegratedGrouping />

        <VirtualTable
          height={600}
          rowComponent={({ children, row }) => (
            <TableRow
              hover
              style={{ cursor: 'pointer' }}
              onClick={e => {
                console.log(row);
              }}>
              {children}
            </TableRow>
          )}
        />
        {/* rowComponent */}
        <TableHeaderRow
          showSortingControls
          messages={{ sortingHint: 'Ordenar' }}
        />
        <TableGroupRow />

        <Toolbar />
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

export default DataTable;
