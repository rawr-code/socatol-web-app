import React, { Component } from "react";

// Material UI
import {
  Paper,
  Toolbar,
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TableSortLabel,
  TablePagination,
  Tooltip
} from "@material-ui/core";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

class DataTable extends Component {
  state = {
    order: "asc",
    orderBy: "name",
    rows: [
      {
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Name"
      },
      {
        id: "calories",
        numeric: true,
        disablePadding: false,
        label: "Calories"
      },
      { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
      { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
      {
        id: "protein",
        numeric: true,
        disablePadding: false,
        label: "Protein (g)"
      }
    ],
    data: [
      createData("Cupcake", 305, 3.7, 67, 4.3),
      createData("Donut", 452, 25.0, 51, 4.9),
      createData("Eclair", 262, 16.0, 24, 6.0),
      createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      createData("Gingerbread", 356, 16.0, 49, 3.9),
      createData("Honeycomb", 408, 3.2, 87, 6.5),
      createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      createData("Jelly Bean", 375, 0.0, 94, 0.0),
      createData("KitKat", 518, 26.0, 65, 7.0),
      createData("Lollipop", 392, 0.2, 98, 0.0),
      createData("Marshmallow", 318, 0, 81, 2.0),
      createData("Nougat", 360, 19.0, 9, 37.0),
      createData("Oreo", 437, 18.0, 63, 4.0)
    ],
    page: 0,
    rowsPerPage: 5
  };

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const { data, order, orderBy, rowsPerPage, page, rows } = this.state;

    return (
      <Paper style={{ margin: 50 }}>
        <Toolbar>askjdhasd</Toolbar>
        <Table>
          <TableHead>
            <TableRow>
              {rows.map(row => {
                return (
                  <TableCell
                    key={row.id}
                    numeric={row.numeric}
                    sortDirection={orderBy === row.id ? order : false}
                  >
                    <Tooltip
                      title="Ordenar"
                      placement={row.numeric ? "bottom-end" : "bottom-start"}
                      enterDelay={300}
                    >
                      <TableSortLabel
                        active={orderBy === row.id}
                        direction={order}
                        onClick={event => this.handleRequestSort(event, row.id)}
                      >
                        {row.label}
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                return (
                  <TableRow hover key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell numeric>{n.calories}</TableCell>
                    <TableCell numeric>{n.fat}</TableCell>
                    <TableCell numeric>{n.carbs}</TableCell>
                    <TableCell numeric>{n.protein}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={6}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                labelRowsPerPage="Filas por página:"
                rowsPerPageOptions={[5, 25, 50, 100]}
                labelDisplayedRows={({ from, to, count }) =>
                  `${from} a ${to} de ${count}`
                }
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

export default DataTable;
