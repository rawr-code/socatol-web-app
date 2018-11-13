import React, { Component, Fragment } from "react";

// React Router
import { Link } from "react-router-dom";

// Material UI
import {
  Paper,
  Toolbar,
  Button,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  TablePagination,
  Tooltip,
  Typography
} from "@material-ui/core";

import { Add, Search, Print } from "@material-ui/icons";

// Styles
import Styles from "./Styles";
import { withStyles } from "@material-ui/core/styles";

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
      // {
      //   id: "name",
      //   numeric: false,
      //   disablePadding: true,
      //   label: "Name"
      // },
      // {
      //   id: "calories",
      //   numeric: true,
      //   disablePadding: false,
      //   label: "Calories"
      // },
      // { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
      // { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
      // {
      //   id: "protein",
      //   numeric: true,
      //   disablePadding: false,
      //   label: "Protein (g)"
      // }
    ],
    data: [
      // createData("Cupcake", 305, 3.7, 67, 4.3),
      // createData("Donut", 452, 25.0, 51, 4.9),
      // createData("Eclair", 262, 16.0, 24, 6.0),
      // createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      // createData("Gingerbread", 356, 16.0, 49, 3.9),
      // createData("Honeycomb", 408, 3.2, 87, 6.5),
      // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      // createData("Jelly Bean", 375, 0.0, 94, 0.0),
      // createData("KitKat", 518, 26.0, 65, 7.0),
      // createData("Lollipop", 392, 0.2, 98, 0.0),
      // createData("Marshmallow", 318, 0, 81, 2.0),
      // createData("Nougat", 360, 19.0, 9, 37.0),
      // createData("Oreo", 437, 18.0, 63, 4.0)
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
    const { classes, buttonUrl, addButtonTitle } = this.props;
    const { data, order, orderBy, rowsPerPage, page, rows } = this.state;
    const MyLink = props => <Link to={buttonUrl} {...props} />;
    return (
      <div className={classes.root}>
        <Paper classes={{ root: classes.paper }}>
          <div className={classes.imgContainer}>
            <img
              alt="Almacén icon"
              src="https://img.icons8.com/dusk/2x/warehouse.png"
              style={{ height: 128, width: 128 }}
            />
            <div className={classes.info}>
              <div className={classes.titleContainer}>
                <Typography
                  component="h2"
                  variant="h6"
                  className={classes.title}
                >
                  Lo sentimos, no tiene almacenes registrados.
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  className={classes.title}
                >
                  Sin almacenes no podras tus productos.
                </Typography>
              </div>
              <Button
                component={MyLink}
                variant="contained"
                size="medium"
                color="primary"
              >
                {addButtonTitle}
              </Button>
            </div>
          </div>
          {data.length > 0 && (
            <Fragment>
              <Toolbar classes={{ root: classes.toolbar }}>
                {/* <IconButton classes={{ root: classes.iconButton }}>
              <Search className={classes.icon} />
            </IconButton> */}
                <Button
                  component={MyLink}
                  variant="contained"
                  size="medium"
                  color="primary"
                >
                  {addButtonTitle}
                </Button>
                <div>
                  <IconButton classes={{ root: classes.iconButton }}>
                    <Search className={classes.icon} />
                  </IconButton>
                  <IconButton classes={{ root: classes.iconButton }}>
                    <Print className={classes.icon} />
                  </IconButton>
                </div>
              </Toolbar>
              <div className={classes.tableContainer}>
                <Table classes={{ root: classes.table }}>
                  <TableHead className={classes.tableHead}>
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
                              placement={
                                row.numeric ? "bottom-end" : "bottom-start"
                              }
                              enterDelay={300}
                            >
                              <TableSortLabel
                                active={orderBy === row.id}
                                direction={order}
                                onClick={event =>
                                  this.handleRequestSort(event, row.id)
                                }
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
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map(n => {
                        return (
                          <TableRow
                            hover
                            key={n.id}
                            classes={{ hover: classes.tableRowHover }}
                          >
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
                </Table>
              </div>
              <TablePagination
                classes={{
                  toolbar: classes.pagination,
                  caption: classes.paginationCaption
                }}
                component="div"
                colSpan={rows.length}
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
            </Fragment>
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(Styles)(DataTable);
