import React, { Component } from 'react';

// Material UI
import { TableRow, IconButton } from '@material-ui/core';

// Icons
import { ChevronDown } from 'react-feather';

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
  state = {
    rows: [],
    columns: [],
    tableColumnExtensions: [
      // { columnName: 'price', align: 'right' },
      { columnName: 'options', width: 70 }
    ]
  };

  componentDidUpdate = prevProps => {
    const { columns, rows } = this.props;
    if (rows !== prevProps.rows) {
      rows && rows.length > 0 && this.addOptions(rows);
    }
    if (columns !== prevProps.columns) {
      this.setState({ columns: [...columns, { name: 'options', title: ' ' }] });
    }
  };

  addOptions = rows => {
    let newRows = [];
    rows.map(row =>
      newRows.push({
        ...row,
        options: (
          <IconButton>
            <ChevronDown size={16} />
          </IconButton>
        )
      })
    );
    this.setState({ rows: newRows });
  };

  render() {
    const { columns = [] } = this.state;
    const { rows = [] } = this.state;
    return (
      <Grid rows={rows} columns={columns} style={{ height: '100%' }}>
        {columns.length > 2 && <DragDropProvider />}
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
          columnExtensions={this.state.tableColumnExtensions}
          height={600}
          rowComponent={({ children, row }) => (
            <TableRow hover style={{ cursor: 'pointer' }}>
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
        {columns.length > 2 && (
          <GroupingPanel
            showGroupingControls
            messages={{
              groupByColumn:
                'Arrastre un encabezado de columna aquí para agrupar por esa columna'
            }}
          />
        )}
      </Grid>
    );
  }
}

export default DataTable;
