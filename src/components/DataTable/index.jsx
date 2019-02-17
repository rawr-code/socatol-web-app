import React, { Component } from 'react';
import { theme } from '../../MUICustomTheme';

// Material UI
import { Paper, MuiThemeProvider } from '@material-ui/core';

// DX React Grid
import {
  // Sorting
  SortingState,
  IntegratedSorting,
  // Pagination
  PagingState,
  IntegratedPaging,
  // Search
  SearchState,
  IntegratedFiltering,
  // GroupRow
  GroupingState,
  IntegratedGrouping
} from '@devexpress/dx-react-grid';

// DX React Grid Material1
import {
  Grid,
  Table,
  Toolbar,
  TableHeaderRow,
  // Pagination
  PagingPanel,
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
      pageSizes: [5, 10, 15, 0],
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
    const { rows, columns, pageSizes } = this.state;
    return (
      <Paper>
        <Grid rows={rows} columns={columns}>
          <DragDropProvider />
          <SearchState />
          <SortingState
            defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
          />
          <GroupingState />
          <PagingState defaultCurrentPage={0} defaultPageSize={5} />

          <IntegratedSorting />
          <IntegratedFiltering />
          <IntegratedGrouping />
          <IntegratedPaging />

          <Table />
          <TableHeaderRow showSortingControls />
          <TableGroupRow />

          <Toolbar />
          <SearchPanel />
          <GroupingPanel showGroupingControls />
          <PagingPanel pageSizes={pageSizes} />
        </Grid>
      </Paper>
    );
  }
}

export default DataTable;
