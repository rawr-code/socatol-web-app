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

import {
  PluginHost,
  Plugin,
  Getter,
  Template,
  TemplateConnector
} from '@devexpress/dx-react-core';

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
      if (rows.length > 0) {
        console.log('hola');
        console.table(rows);
        this.addOptions(columns, rows);
      }
    }
  };

  addOptions = (columns, rows) => {
    let newRows = [];
    const newColumns = [...columns, { name: 'options', title: ' ' }];
    rows.map(row => {
      newRows.push({
        ...row,
        options: (
          <IconButton>
            <ChevronDown size={16} />
          </IconButton>
        )
      });
    });
    console.log(newRows);
    this.setState({ columns: newColumns, rows: newRows });
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
