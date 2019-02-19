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
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' }
      ],
      rows: [
        { sex: 'Female', name: 'Sandra', city: 'Las Vegas', car: 'Audi A4' },
        { sex: 'Male', name: 'Paul', city: 'Paris', car: 'Nissan Altima' },
        { sex: 'Male', name: 'Mark', city: 'Paris', car: 'Honda Accord' },
        { sex: 'Male', name: 'Paul', city: 'Paris', car: 'Nissan Altima' },
        { sex: 'Female', name: 'Linda', city: 'Austin', car: 'Toyota Corolla' },
        {
          sex: 'Male',
          name: 'Robert',
          city: 'Las Vegas',
          car: 'Chevrolet Cruze'
        },
        { sex: 'Female', name: 'Lisa', city: 'London', car: 'BMW 750' },
        { sex: 'Male', name: 'Mark', city: 'Chicago', car: 'Toyota Corolla' },
        {
          sex: 'Male',
          name: 'Thomas',
          city: 'Rio de Janeiro',
          car: 'Honda Accord'
        },
        { sex: 'Male', name: 'Robert', city: 'Las Vegas', car: 'Honda Civic' },
        { sex: 'Female', name: 'Betty', city: 'Paris', car: 'Honda Civic' },
        {
          sex: 'Male',
          name: 'Robert',
          city: 'Los Angeles',
          car: 'Honda Accord'
        },
        {
          sex: 'Male',
          name: 'William',
          city: 'Los Angeles',
          car: 'Honda Civic'
        },
        { sex: 'Male', name: 'Mark', city: 'Austin', car: 'Nissan Altima' }
      ]
    };
  }
  render() {
    // const { rows, columns } = this.state;
    const { rows = [], columns = [] } = this.props;
    return (
      <Grid rows={rows} columns={columns} style={{ height: '100%' }}>
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
          height={600}
          rowComponent={({ children, row }) => (
            <TableRow
              hover
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
